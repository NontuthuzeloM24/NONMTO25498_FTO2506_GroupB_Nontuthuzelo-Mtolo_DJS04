// src/utils/formatDate.js

/**
 * Convert ISO date string to readable format.
 * Example: "2024-01-05" → "Jan 5, 2024"
 *
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDate(isoDate) {
  if (!isoDate) return "Unknown date";

  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
