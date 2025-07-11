import type { ILinks } from "./pagination";

export interface IVehicle {
  data: {
    attributes: {
      bearing: number;
      carriages: {
        occupancy_status: string;
        occupancy_percentage: number;
        label: string;
      }[];
      current_status: string;
      current_stop_sequence: number;
      direction_id: number;
      label: string;
      latitude: number;
      longitude: number;
      occupancy_status: string;
      revenue: string | null;
      speed: number | null;
      updated_at: string;
    };
    id: string;
    links: {
      self: string;
    };
    relationships: {
      route: {
        data: {
          id: string;
          type: string;
        };
      };
      stop: {
        data: {
          id: string;
          type: string;
        };
      };
      trip: {
        data: {
          id: string;
          type: string;
        };
      };
    };
    type: string;
  };
}

export interface IVehicles {
  links: ILinks;
  data: IVehicle[];
}
