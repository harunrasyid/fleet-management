import type {
  IRoutes,
  IRoutesDetail,
  ITrips,
  ITripsDetail,
  IVehicleDetail,
  IVehicles,
} from "@/types";

const BASE_URL = "https://api-v3.mbta.com";

const fetchJson = async <T>(url: string, context: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch ${context} error: ${res.status}`);
  return res.json();
};

// Vehicles
export const fetchVehicles = async (
  url?: string,
  limit?: number,
  offset?: number,
  trip?: string[],
  route?: string[],
): Promise<IVehicles> => {
  if (url) return fetchJson<IVehicles>(url, "vehicles");

  const params = new URLSearchParams();
  if (limit != null) params.append("page[limit]", limit.toString());
  if (offset != null) params.append("page[offset]", offset.toString());
  if (trip?.length) params.append("filter[trip]", trip.join(","));
  if (route?.length) params.append("filter[route]", route.join(","));

  const fullUrl = `${BASE_URL}/vehicles?${params.toString()}`;
  return fetchJson<IVehicles>(fullUrl, "vehicles");
};

export const fetchVehicleDetail = async (id: string): Promise<IVehicleDetail> =>
  fetchJson<IVehicleDetail>(`${BASE_URL}/vehicles/${id}`, "vehicle detail");

// Trips
export const fetchTrips = async (
  routes: string[],
  url?: string,
  limit?: number,
  offset?: number,
): Promise<ITrips> => {
  if (url) return fetchJson<ITrips>(url, "trips");

  const params = new URLSearchParams();
  params.append("filter[route]", routes.join(","));
  if (limit != null) params.append("page[limit]", limit.toString());
  if (offset != null) params.append("page[offset]", offset.toString());

  const fullUrl = `${BASE_URL}/trips?${params.toString()}`;
  return fetchJson<ITrips>(fullUrl, "trips");
};

export const fetchTripDetail = async (id: string): Promise<ITripsDetail> =>
  fetchJson<ITripsDetail>(`${BASE_URL}/trips/${id}`, "trip detail");

// Routes
export const fetchRoutes = async (
  url?: string,
  limit?: number,
  offset?: number,
): Promise<IRoutes> => {
  if (url) return fetchJson<IRoutes>(url, "routes");

  const params = new URLSearchParams();
  if (limit != null) params.append("page[limit]", limit.toString());
  if (offset != null) params.append("page[offset]", offset.toString());

  const fullUrl = `${BASE_URL}/routes?${params.toString()}`;
  return fetchJson<IRoutes>(fullUrl, "routes");
};

export const fetchRouteDetail = async (id: string): Promise<IRoutesDetail> =>
  fetchJson<IRoutesDetail>(`${BASE_URL}/routes/${id}`, "route detail");
