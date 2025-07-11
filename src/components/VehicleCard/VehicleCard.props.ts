export interface IVehicleCardProps {
  current_status: string;
  current_stop_sequence: number;
  label: string;
  latitude: number;
  longitude: number;
  occupancy_status: string;
  speed: number | null;
  updated_at: string;
  onClick: () => void;
  containerStyles?: string;
}
