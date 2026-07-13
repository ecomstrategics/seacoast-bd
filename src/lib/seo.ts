import type { Metadata } from "next";

const TITLE_SUFFIX = " | Seacoast";
const TITLE_MAX_LENGTH = 65;
const DESCRIPTION_MAX_LENGTH = 170;

function truncateAtWord(text: string, maxLength: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const shortened = normalized.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const wordSafe = lastSpace >= Math.floor(maxLength * 0.7) ? shortened.slice(0, lastSpace) : shortened;
  return `${wordSafe.replace(/[\s,;:.-]+$/, "")}…`;
}

export function seoTitle(pageTitle: string): NonNullable<Metadata["title"]> {
  const availableLength = TITLE_MAX_LENGTH - TITLE_SUFFIX.length;
  return { absolute: `${truncateAtWord(pageTitle, availableLength)}${TITLE_SUFFIX}` };
}

export function seoDescription(description: string): string {
  return truncateAtWord(description, DESCRIPTION_MAX_LENGTH);
}
