import type { ILinks } from "@/types/pagination.ts";

export interface ITripData {
  attributes: {
    bikes_allowed: number;
    block_id: string;
    direction_id: number;
    headsign: string;
    name: string;
    revenue: string;
    wheelchair_accessible: number;
  };
  id: string;
  type: string;
}

export interface ITripsDetail {
  data: ITripData;
}

export interface ITrips {
  links: ILinks;
  data: ITripData[];
}
