import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Epilogue, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RepBanner } from "@/components/RepBanner";
import { SchemaScript, localBusinessSchema, webSiteSchema } from "@/components/Schema";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seacoastbd.com"),
  title: {
    default: "Seacoast Building & Design | Southwest Florida Contractor",
    template: "%s | Seacoast Building & Design",
  },
  description: "Full-service roofing, exterior renovation, storm repair, and building services across Southwest Florida. GAF GoldElite™ Commercial Contractor. (941) 500-5431",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Seacoast Building & Design",
    locale: "en_US",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Seacoast Building & Design - Southwest Florida Contractor" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${inter.variable} font-body antialiased`}>
        <Script id="gtm-base" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MTS2FD6Q');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTS2FD6Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SchemaScript schema={[localBusinessSchema(), webSiteSchema()]} />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <RepBanner />
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileBottomBar />
        {process.env.VERCEL === "1" ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
