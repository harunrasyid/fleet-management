import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ClipLoader } from "react-spinners";
import {
  HStack,
  type IModalProps,
  InformationItem,
  VStack,
} from "@/components";

export const Modal = ({
  isShow,
  closeModal,
  isLoading = false,
}: IModalProps) => {
  return (
    <Dialog open={isShow} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50 text-black">
        {isLoading ? (
          <ClipLoader size={30} color="#3b82f6" />
        ) : (
          <DialogPanel className="w-3xl space-y-4 bg-white p-8 rounded-md gap-4">
            <HStack className={"w-full justify-between"}>
              {/* Title */}
              <DialogTitle className="font-bold">Vehicle Details</DialogTitle>

              {/* Last Update */}
              <VStack>
                <h3 className="font-normal text-sm text-gray-500">
                  Updated At
                </h3>
                <span className="font-semibold text-md">
                  21 Nov 2025, 10:45
                </span>{" "}
              </VStack>
            </HStack>

            {/* Body */}
            <VStack className="gap-4">
              {/* Vehicle Label */}
              <InformationItem title={"Vehicle Label"} data={"1234"} />

              {/* Section 1 */}
              <HStack>
                {/* Speed */}
                <InformationItem title={"Speed"} data={"1234"} />

                {/* Occupancy */}
                <InformationItem title={"Occupancy"} data={"1234"} />
              </HStack>

              {/* Section 2 */}
              <HStack>
                {/* Current Status */}
                <InformationItem title={"Current Status"} data={"1234"} />

                {/* Current Stop */}
                <InformationItem title={"Current Stop"} data={"1234"} />
              </HStack>

              {/* Section 3 */}
              <HStack>
                {/* Latitude, longitude */}
                <InformationItem title={"Latitude, Longitude"} data={"1234"} />
              </HStack>

              {/* Route */}
              <h3 className="font-semibold text-lg mt-4">Route</h3>
              <HStack>
                {/* Route Name */}
                <InformationItem title={"Route Name"} data={"1234"} />

                {/* Fare Class */}
                <InformationItem title={"Fare Class"} data={"1234"} />
              </HStack>
              <HStack>
                {/* Description */}
                <InformationItem title={"Description"} data={"1234"} />
              </HStack>

              {/* Trips */}
              <h3 className="font-semibold text-lg mt-4">Route</h3>
              <HStack>
                {/* Block ID */}
                <InformationItem title={"Block ID"} data={"1234"} />

                {/* Headsign */}
                <InformationItem title={"Headsign"} data={"1234"} />
              </HStack>
              <HStack>
                {/* Wheelchair */}
                <InformationItem
                  title={"Wheelchair Accessible"}
                  data={"1234"}
                />

                {/* Current Status */}
                <InformationItem title={"Bike Allowed"} data={"1234"} />
              </HStack>
            </VStack>

            <button className="text-white mt-4" onClick={closeModal}>
              Close
            </button>
          </DialogPanel>
        )}
      </div>
    </Dialog>
  );
};
