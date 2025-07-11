import type { IOption } from "@/types";

export interface IPaginationProps {
  onNextPress?: () => void;
  onBackPress?: () => void;
  information: string;
  limit: IOption;
  onLimitChange: (newLimit: IOption) => void;
}
