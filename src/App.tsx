import { useState } from "react";
import { Dropdown, Pagination, VehicleCard, VStack } from "@/components";
import type { IVehicles } from "@/types";
import "./App.css";
import { useModal, usePagination } from "@/hooks";
import { Modal } from "@/components/Modal/Modal.tsx";

type OptionType = {
  label: string;
  value: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const dummyVehicles: IVehicles = {
  links: {
    self: "https://api-v3.mbta.com/vehicles?page[offset]=0",
    next: "https://api-v3.mbta.com/vehicles?page[offset]=10",
    last: "https://api-v3.mbta.com/vehicles?page[offset]=50",
    first: "https://api-v3.mbta.com/vehicles?page[offset]=50",
    prev: "https://api-v3.mbta.com/vehicles?page[offset]=50",
  },
  data: [
    {
      data: {
        id: "1817",
        type: "vehicle",
        links: {
          self: "/vehicles/1817",
        },
        attributes: {
          bearing: 174,
          carriages: [
            {
              occupancy_status: "MANY_SEATS_AVAILABLE",
              occupancy_percentage: 80,
              label: "Carriage A",
            },
          ],
          current_status: "IN_TRANSIT_TO",
          current_stop_sequence: 8,
          direction_id: 0,
          label: "1817",
          latitude: 42.3294,
          longitude: -71.2724,
          occupancy_status: "FEW_SEATS_AVAILABLE",
          revenue: "REVENUE",
          speed: 16.2,
          updated_at: "2025-07-10T16:04:44-04:00",
        },
        relationships: {
          route: {
            data: { id: "1", type: "route" },
          },
          stop: {
            data: { id: "64", type: "stop" },
          },
          trip: {
            data: { id: "T1234", type: "trip" },
          },
        },
      },
    },
    {
      data: {
        id: "1817",
        type: "vehicle",
        links: {
          self: "/vehicles/1817",
        },
        attributes: {
          bearing: 174,
          carriages: [
            {
              occupancy_status: "MANY_SEATS_AVAILABLE",
              occupancy_percentage: 80,
              label: "Carriage A",
            },
          ],
          current_status: "IN_TRANSIT_TO",
          current_stop_sequence: 8,
          direction_id: 0,
          label: "1817",
          latitude: 42.3294,
          longitude: -71.2724,
          occupancy_status: "FEW_SEATS_AVAILABLE",
          revenue: "REVENUE",
          speed: 16.2,
          updated_at: "2025-07-10T16:04:44-04:00",
        },
        relationships: {
          route: {
            data: { id: "1", type: "route" },
          },
          stop: {
            data: { id: "64", type: "stop" },
          },
          trip: {
            data: { id: "T1234", type: "trip" },
          },
        },
      },
    },
  ],
};

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ];

  const [value, setValue] = useState<OptionType>();

  // Custom hooks
  const { paginationProps } = usePagination();
  const { openModal, ...modal } = useModal();

  return (
    <div className="screen flex flex-col p-6 gap-8">
      {/* Title */}
      <h1 className="font-bold mb-6 text-center">Fleet Management</h1>

      {/* Filter Bar */}
      <div className={"flex gap-8"}>
        {/* Route */}
        <Dropdown<OptionType>
          label={"Select Route(s)"}
          isMulti
          // @ts-expect-error: fix later
          loadFunction={() => {}}
          onChange={() => {}}
          onInputChange={() => {}}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          value={value}
          loadOptions={() => {}}
        />

        {/* Trip */}
        <Dropdown<OptionType>
          label={"Select Trip(s)"}
          isMulti
          // @ts-expect-error: fix later
          loadFunction={() => {}}
          onChange={() => {}}
          onInputChange={() => {}}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          value={value}
          loadOptions={() => {}}
        />
      </div>

      {/* Card List */}
      <VStack className={"flex-1 gap-4 overflow-y-auto"}>
        {dummyVehicles.data.map((vehicle, index) => {
          return (
            <VehicleCard
              key={`${index}-vehicle-card`}
              onClick={openModal}
              {...vehicle.data.attributes}
            />
          );
        })}
      </VStack>

      {/* Pagination */}
      <Pagination {...paginationProps} />

      {/* Detail Modal */}
      <Modal {...modal} />
    </div>
  );
}

export default App;
