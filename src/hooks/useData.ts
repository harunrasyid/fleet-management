import { useEffect, useState } from "react";
import type {
  IFilter,
  ILinks,
  IOption,
  IRoutesDetail,
  ITripsDetail,
  IVehicleDetail,
  IVehicles,
} from "@/types";
import { PAGINATION_OPTIONS } from "@/constants";
import {
  fetchRouteDetail,
  fetchTripDetail,
  fetchVehicleDetail,
  fetchVehicles,
} from "@/api";

function handleError(err: unknown) {
  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("An unknown error occurred.");
  }
}

export function useData() {
  // Pagination
  const [limit, setLimit] = useState<IOption>(PAGINATION_OPTIONS[0]);

  // Data
  const [vehicles, setVehicles] = useState<IVehicles | undefined>();
  const [vehicle, setVehicle] = useState<IVehicleDetail | undefined>();
  const [trips, setTrips] = useState<ITripsDetail | undefined>();
  const [routes, setRoutes] = useState<IRoutesDetail | undefined>();

  // Filter
  const [filter, setFilter] = useState<IFilter>({
    routes: [],
    trips: [],
  });

  // Loading
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // === Fetch Handlers ===
  const fetchVehiclesList = async (
    url?: string,
    limit?: number,
    offset?: number,
    trip?: string[],
    route?: string[],
  ) => {
    try {
      setLoading(true);
      setVehicles(undefined);
      const result = await fetchVehicles(url, limit, offset, trip, route);
      setVehicles(result);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchVehicleData = async (id: string) => {
    try {
      setVehicle(undefined);
      return await fetchVehicleDetail(id);
    } catch (err) {
      handleError(err);
    }
  };

  const fetchTripData = async (id: string) => {
    try {
      setTrips(undefined);
      return await fetchTripDetail(id);
    } catch (err) {
      handleError(err);
    }
  };

  const fetchRouteData = async (id: string) => {
    try {
      setRoutes(undefined);
      return await fetchRouteDetail(id);
    } catch (err) {
      handleError(err);
    }
  };

  // Fetch vehicles on pagination change
  useEffect(() => {
    fetchVehiclesList(
      undefined,
      limit.value as number,
      undefined,
      filter.trips.map((trip) => trip.value) as string[],
      filter.routes.map((route) => route.value) as string[],
    );
  }, [filter.routes, filter.trips, limit.value]);

  // Fetch vehicle and related trip/route
  const handleVehicleCardClick = async (id: string) => {
    setLoadingDetail(true);
    try {
      const vehicleRes = await fetchVehicleData(id);
      if (!vehicleRes) return;

      setVehicle(vehicleRes);

      const tripId = vehicleRes.data.relationships.trip.data.id;
      const routeId = vehicleRes.data.relationships.route.data.id;

      const [tripRes, routeRes] = await Promise.all([
        fetchTripData(tripId),
        fetchRouteData(routeId),
      ]);

      if (tripRes) setTrips(tripRes);
      if (routeRes) setRoutes(routeRes);
    } finally {
      setLoadingDetail(false);
    }
  };

  // Pagination information
  const getQueryParams = (url: string): Record<string, string> => {
    const params: Record<string, string> = {};
    const query = url.split("?")[1];
    const pairs = query?.split("&") ?? [];
    pairs.forEach((pair) => {
      const [key, value] = pair
        .replace("page[", "")
        .replace("]", "")
        .split("=");
      params[key] = value;
    });
    return params;
  };

  const getPaginationInfo = (links: ILinks | undefined): string => {
    if (links) {
      const refUrl = links.next ?? links.prev ?? links.self ?? links.first;
      const lastUrl = links.last;

      const refParams = getQueryParams(refUrl ?? "");
      const lastParams = getQueryParams(lastUrl ?? "");

      const limit = parseInt(refParams["limit"], 10);
      const lastOffset = parseInt(lastParams["offset"], 10);
      const total = lastOffset + limit;

      let currentOffset = 0;

      if (links.next) {
        const nextOffset = parseInt(getQueryParams(links.next)["offset"], 10);
        currentOffset = nextOffset - limit;
      } else if (links.prev) {
        const prevOffset = parseInt(getQueryParams(links.prev)["offset"], 10);
        currentOffset = prevOffset + limit;
      } else {
        currentOffset = parseInt(refParams["offset"], 10) || 0;
      }

      const from = currentOffset + 1;
      const to = Math.min(currentOffset + limit, total);

      return `Showing ${from} - ${to} from ${total} data`;
    } else {
      return "";
    }
  };

  const information = getPaginationInfo(vehicles?.links);

  const paginationProps = {
    limit,
    onNextPress:
      (vehicles?.links?.next ?? undefined)
        ? () => fetchVehiclesList(vehicles?.links.next)
        : undefined,
    onBackPress:
      (vehicles?.links?.prev ?? undefined)
        ? () => fetchVehiclesList(vehicles?.links.prev)
        : undefined,
    onLimitChange: setLimit,
    information,
    loading: loading,
  };

  return {
    vehicles,
    vehicle,
    trips,
    routes,
    filter,
    setFilter,
    limit,
    setLimit,
    loading,
    loadingDetail,
    handleVehicleCardClick,
    paginationProps,
    information,
  };
}
