import type { IVehicleDetail } from "@/types";

export interface IModalProps {
  // Modal related
  isShow: boolean;
  closeModal: () => void;
  isLoading?: boolean;

  // Data
  vehicle: IVehicleDetail | undefined;
}
