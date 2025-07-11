import clsx from "clsx";
import { HStack, InformationItem, VStack } from "@/components";
import { formatDate } from "@/utils";
import type { IVehicleCardProps } from "./VehicleCard.props";

export const VehicleCard = ({
  label,
  speed,
  occupancy_status,
  current_status,
  current_stop_sequence,
  longitude,
  latitude,
  updated_at,
  onClick,
  containerStyles,
}: IVehicleCardProps) => {
  return (
    <VStack
      onClick={onClick}
      className={clsx(
        "px-4 py-6 bg-white text-black rounded shadow border border-gray-300 gap-4 cursor-pointer hover:border-blue-800",
        containerStyles,
      )}
    >
      {/* Label & Updated At*/}
      <HStack className={"w-full justify-between"}>
        <h2 className="font-bold text-3xl">Vehicle ${label}</h2>
        <h3 className="font-semibold text-md text-gray-500">{`${formatDate(updated_at)}`}</h3>
      </HStack>

      {/* Speed & Occupancy */}
      <HStack className={"w-full justify-between mb-4"}>
        <InformationItem title={`Speed:`}>
          <span className="font-semibold text-2xl">{`${speed} km/h`}</span>
        </InformationItem>

        <InformationItem title={`Occupancy:`}>
          <span className="font-semibold text-2xl">{`${occupancy_status}`}</span>
        </InformationItem>
      </HStack>

      {/* Status & Current Stops */}
      <HStack className={"w-full justify-between"}>
        <InformationItem title={`Current Status:`} data={current_status} />

        <InformationItem
          title={`Current Stop:`}
          data={`${current_stop_sequence}`}
        />
      </HStack>

      {/* Latitude & Longitude */}
      <InformationItem
        title={`Latitude, Longitude:`}
        data={`${latitude}, ${longitude}`}
      />
    </VStack>
  );
};
