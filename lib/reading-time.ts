/** Estimate reading time from HTML content string */
export function getReadingTime(htmlContent: string): number {
  const text = htmlContent.replace(/<[^>]*>/g, "").trim();
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}
