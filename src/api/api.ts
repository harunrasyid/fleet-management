import type { IVehicleDetail, IVehicles } from "@/types";

export const fetchVehicles = async (
  limit: number,
  offset: number,
): Promise<IVehicles> => {
  const res = await fetch(
    `https://api-v3.mbta.com/vehicles?page[limit]=${limit}&page[offset]=${offset}`,
  );
  if (!res.ok) throw new Error(`Fetch vehicles error: ${res.status}`);
  return await res.json();
};

export const fetchVehicleDetail = async (
  id: string,
): Promise<IVehicleDetail> => {
  const res = await fetch(`https://api-v3.mbta.com/vehicles/${id}`);
  if (!res.ok) throw new Error(`Fetch vehicles error: ${res.status}`);
  return await res.json();
};
