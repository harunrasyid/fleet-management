import { fetchTrips } from "@/api";
import type { IFilter, IOption } from "@/types";

export function useTrips(filter: IFilter) {
  // @ts-expect-error: will be fixed later
  const loadTripOptions = async (search: any, loadedOptions: any) => {
    const response = await fetchTrips(
      filter.routes.map((route) => route.value) as string[],
      undefined,
      10,
      loadedOptions.length,
    );

    const options: IOption[] = [];
    response.data.forEach((item) => {
      options.push({
        label: item.attributes.block_id,
        value: item.id,
      });
    });

    return {
      options: options,
      hasMore: !!response.links.next,
    };
  };

  return {
    loadTripOptions,
  };
}
