import type { AsyncPaginateProps } from "react-select-async-paginate";
import type { GroupBase } from "react-select";

interface ILoadFunctionArgs {
  inputValue: string;
  page: number;
}

interface LoadFunctionReturn<T> {
  options: T[];
  hasMore: boolean;
}

export interface IDropdownProps<T>
  extends Omit<
    AsyncPaginateProps<T, GroupBase<T>, { page: number }, true>,
    "loadOptions" | "additional"
  > {
  loadFunction: (args: ILoadFunctionArgs) => Promise<LoadFunctionReturn<T>>;
  initialPage?: number;
  label?: string;
}
