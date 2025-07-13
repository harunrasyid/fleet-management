import type { IRoutesDetail, ITripsDetail, IVehicleDetail } from "@/types";

export interface IModalProps {
  // Modal related
  isShow: boolean;
  closeModal: () => void;
  isLoading?: boolean;

  // Data
  vehicle: IVehicleDetail | undefined;
  trips: ITripsDetail | undefined;
  routes: IRoutesDetail | undefined;
}
