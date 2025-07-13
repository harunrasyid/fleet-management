import { VStack } from "@/components";
import type { IInformationItemProps } from "./InformationItem.props.ts";

export const InformationItem = ({
  title,
  data,
  children,
}: IInformationItemProps) => {
  return (
    <VStack className="flex-1">
      {title && <h3 className="font-normal text-sm text-gray-500">{title}</h3>}
      {data && <span className="font-semibold text-md">{data}</span>}
      {children}
    </VStack>
  );
};
