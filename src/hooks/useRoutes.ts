import { fetchRoutes } from "@/api";
import type { IOption } from "@/types";

export function useRoutes() {
  // @ts-expect-error: will be fixed later
  const loadRouteOptions = async (search: any, loadedOptions: any) => {
    const response = await fetchRoutes(undefined, 10, loadedOptions.length);

    const options: IOption[] = [];
    response.data.forEach((item) => {
      options.push({
        label: item.attributes.long_name,
        value: item.id,
      });
    });

    return {
      options: options,
      hasMore: !!response.links.next,
    };
  };

  return {
    loadRouteOptions,
  };
}
