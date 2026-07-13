import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const SITE = new URL("https://seacoastbd.com");
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function findKey() {
  const files = await readdir(path.join(process.cwd(), "public"));
  const keyFile = files.find((file) => /^[a-f0-9]{32}\.txt$/i.test(file));
  if (!keyFile) throw new Error("No IndexNow key file was found in public/.");

  const key = (await readFile(path.join(process.cwd(), "public", keyFile), "utf8")).trim();
  if (!key) throw new Error(`IndexNow key file ${keyFile} is empty.`);
  return { key, keyFile };
}

async function urlsFromSitemap(sitemapUrl) {
  const response = await fetch(sitemapUrl);
  if (!response.ok) throw new Error(`Unable to fetch sitemap (${response.status}).`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

function normalizeUrls(values) {
  return [...new Set(values.map((value) => new URL(value, SITE).toString()))].filter(
    (url) => new URL(url).hostname === SITE.hostname,
  );
}

async function main() {
  const args = process.argv.slice(2);
  const sitemapIndex = args.indexOf("--sitemap");
  let values = args.filter(
    (value, index) => value !== "--sitemap" && (sitemapIndex < 0 || index !== sitemapIndex + 1),
  );

  if (sitemapIndex >= 0) {
    const sitemapUrl = args[sitemapIndex + 1] || `${SITE.origin}/sitemap.xml`;
    values = values.concat(await urlsFromSitemap(sitemapUrl));
  }

  const urlList = normalizeUrls(values);
  if (urlList.length === 0) {
    throw new Error("Pass one or more changed URLs, or use --sitemap https://seacoastbd.com/sitemap.xml.");
  }
  if (urlList.length > 10000) throw new Error("IndexNow accepts at most 10,000 URLs per request.");

  const { key, keyFile } = await findKey();
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE.hostname,
      key,
      keyLocation: `${SITE.origin}/${keyFile}`,
      urlList,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed (${response.status}): ${body || response.statusText}`);
  }

  console.log(`Submitted ${urlList.length} URL${urlList.length === 1 ? "" : "s"} to IndexNow (${response.status}).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
