import type {
  IRoutesDetail,
  ITripsDetail,
  IVehicleDetail,
  IVehicles,
} from "@/types";

export const fetchVehicles = async (
  url?: string,
  limit?: number,
  offset?: number,
): Promise<IVehicles> => {
  const res = await fetch(
    url ??
      `https://api-v3.mbta.com/vehicles?page[limit]=${limit ?? 0}&page[offset]=${offset ?? 0}`,
  );
  if (!res.ok) throw new Error(`Fetch vehicles error: ${res.status}`);
  return await res.json();
};

export const fetchVehicleDetail = async (
  id: string,
): Promise<IVehicleDetail> => {
  const res = await fetch(`https://api-v3.mbta.com/vehicles/${id}`);
  if (!res.ok) throw new Error(`Fetch vehicles detail error: ${res.status}`);
  return await res.json();
};

export const fetchTripDetail = async (id: string): Promise<ITripsDetail> => {
  const res = await fetch(`https://api-v3.mbta.com/trips/${id}`);
  if (!res.ok) throw new Error(`Fetch trips detail error: ${res.status}`);
  return await res.json();
};

export const fetchRouteDetail = async (id: string): Promise<IRoutesDetail> => {
  const res = await fetch(`https://api-v3.mbta.com/routes/${id}`);
  if (!res.ok) throw new Error(`Fetch routes detail error: ${res.status}`);
  return await res.json();
};
