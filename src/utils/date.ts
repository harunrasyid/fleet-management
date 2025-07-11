import { format, parseISO } from "date-fns";

import { id } from "date-fns/locale";

const locale = id;

export const formatDate = (date: string, formatStr: string = "d MMMM yyyy") => {
  if (!date) return "";

  const res = parseISO(date);
  return format(res, formatStr, { locale });
};
