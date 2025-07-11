import { AsyncPaginate } from "react-select-async-paginate";
import type { GroupBase, OptionsOrGroups } from "react-select";
import type { IDropdownProps } from "./Dropdown.props";

export const Dropdown = <T,>({
  value,
  onChange,
  loadFunction,
  initialPage = 1,
  debounceTimeout = 500,
  label,
  ...rest
}: IDropdownProps<T>) => {
  const wrappedLoadOptions = async (
    inputValue: string,
    options: OptionsOrGroups<T, GroupBase<T>>,
    additional: { page: number },
  ) => {
    const page = additional?.page ?? initialPage;
    const result = await loadFunction({ inputValue, page });
    return {
      options: options,
      hasMore: result.hasMore,
      additional: {
        page: page + 1,
      },
    };
  };

  return (
    <div className={"flex flex-1 flex-col"}>
      {label && <label className="font-medium mb-1 block">{label}</label>}
      <AsyncPaginate<T, GroupBase<T>, { page: number }, true>
        isMulti
        value={value}
        onChange={onChange}
        // @ts-expect-error: fix later
        loadOptions={wrappedLoadOptions}
        additional={{ page: initialPage }}
        debounceTimeout={debounceTimeout}
        {...rest}
      />
    </div>
  );
};
