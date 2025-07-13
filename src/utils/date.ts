import { format, parseISO } from "date-fns";

import { id } from "date-fns/locale";

const locale = id;

/**
 * Formats an ISO date string into a human-readable string using the Indonesian locale.
 *
 * @param date - The ISO 8601 date string to format (e.g., "2023-07-13T12:00:00Z").
 * @param formatStr - Optional. The date-fns format string. Defaults to "d MMMM yyyy".
 *                    Examples:
 *                    - "d MMM yyyy" -> "13 Jul 2023"
 *                    - "d MMMM yyyy" -> "13 Juli 2023"
 *                    - "EEEE, d MMMM yyyy" -> "Minggu, 13 Juli 2023"
 *
 * @returns A localized formatted date string, or an empty string.
 */
export const formatDate = (date: string, formatStr: string = "d MMMM yyyy") => {
  if (!date) return "";

  const res = parseISO(date);
  return format(res, formatStr, { locale });
};
