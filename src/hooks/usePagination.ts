import { useState } from "react";
import type { IOption } from "@/types";
import { PAGINATION_OPTIONS } from "@/constants";

export function usePagination() {
  const [limit, setLimit] = useState<IOption>(PAGINATION_OPTIONS[0]);

  // Pagination information
  const information: string = "";

  // Props for pagination component
  const paginationProps = {
    limit,
    onLimitChange: setLimit,
    information,
  };

  return {
    limit,
    setLimit,
    paginationProps,
    information,
  };
}
