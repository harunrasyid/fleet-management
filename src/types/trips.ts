export interface ITripsDetail {
  data: {
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
  };
}
