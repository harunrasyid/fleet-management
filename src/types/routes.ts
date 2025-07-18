import type { ILinks } from "@/types";

export interface IRouteData {
  attributes: {
    color: string;
    description: string;
    direction_destinations: string[];
    direction_names: string[];
    fare_class: string;
    listed_route: boolean;
    long_name: string;
    short_name: string;
    sort_order: number;
    text_color: string;
    type: number;
  };
  id: string;
  links: {
    self: string;
  };
  relationships: {
    agency: {
      data: {
        id: string;
        type: string;
      };
    };
    line: {
      data: {
        id: string;
        type: string;
      };
    };
  };
  type: string;
}

export interface IRoutesDetail {
  data: IRouteData;
}

export interface IRoutes {
  links: ILinks;
  data: IRouteData[];
}
