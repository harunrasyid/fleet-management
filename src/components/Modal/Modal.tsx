import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ClipLoader } from "react-spinners";
import { HStack, InformationItem, VStack } from "@/components";
import { formatDate } from "@/utils";
import type { IModalProps } from "./Modal.props";

export const Modal = ({
  isShow,
  closeModal,
  isLoading = false,
  vehicle,
  trips,
  routes,
}: IModalProps) => {
  if (!vehicle) return null;

  const {
    data: { attributes },
  } = vehicle;
  const routeAttributes = routes?.data?.attributes;
  const tripAttributes = trips?.data?.attributes;

  return (
    <Dialog open={isShow} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center w-screen p-4 bg-black/50 text-black">
        {isLoading ? (
          <ClipLoader size={30} color="#3b82f6" />
        ) : (
          <DialogPanel className="w-3xl bg-white p-8 rounded-md space-y-6">
            {/* Header */}
            <HStack className="justify-between w-full">
              <DialogTitle className="font-bold text-lg">
                Vehicle Details
              </DialogTitle>
              <VStack>
                <span className="text-sm text-gray-500">Updated At</span>
                <span className="text-md font-semibold">
                  {formatDate(attributes.updated_at, "dd MMM yyyy, HH:mm")}
                </span>
              </VStack>
            </HStack>

            {/* Vehicle Info */}
            <VStack className="gap-4">
              <InformationItem title="Vehicle Label" data={attributes.label} />

              <HStack>
                <InformationItem
                  title="Speed"
                  data={
                    attributes.speed != null ? `${attributes.speed} km/h` : "-"
                  }
                />
                <InformationItem
                  title="Occupancy"
                  data={attributes.occupancy_status ?? "-"}
                />
              </HStack>

              <HStack>
                <InformationItem
                  title="Current Status"
                  data={attributes.current_status ?? "-"}
                />
                <InformationItem
                  title="Current Stop"
                  data={`${attributes.current_stop_sequence ?? "-"}`}
                />
              </HStack>

              <HStack>
                <InformationItem
                  title="Latitude, Longitude"
                  data={`${attributes.latitude}, ${attributes.longitude}`}
                />
              </HStack>
            </VStack>

            {/* Route Info */}
            {routeAttributes && (
              <>
                <h3 className="mt-4 font-semibold text-lg">Route</h3>
                <VStack className="gap-4">
                  <HStack>
                    <InformationItem
                      title="Route Name"
                      data={`${routeAttributes.long_name} - ${routeAttributes.short_name}`}
                    />
                    <InformationItem
                      title="Fare Class"
                      data={routeAttributes.fare_class}
                    />
                  </HStack>
                  <HStack>
                    <InformationItem
                      title="Description"
                      data={routeAttributes.description}
                    />
                  </HStack>
                </VStack>
              </>
            )}

            {/* Trip Info */}
            {tripAttributes && (
              <>
                <h3 className="mt-4 font-semibold text-lg">Trip</h3>
                <VStack className="gap-4">
                  <HStack>
                    <InformationItem
                      title="Block ID"
                      data={tripAttributes.block_id}
                    />
                    <InformationItem
                      title="Headsign"
                      data={tripAttributes.headsign}
                    />
                  </HStack>
                  <HStack>
                    <InformationItem
                      title="Wheelchair Accessible"
                      data={
                        tripAttributes.wheelchair_accessible === 1
                          ? "Yes"
                          : tripAttributes.wheelchair_accessible === 2
                            ? "No"
                            : "No Data"
                      }
                    />
                    <InformationItem
                      title="Bike Allowed"
                      data={
                        tripAttributes.bikes_allowed === 1
                          ? "Yes"
                          : tripAttributes.bikes_allowed === 2
                            ? "No"
                            : "No Data"
                      }
                    />
                  </HStack>
                </VStack>
              </>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Close
            </button>
          </DialogPanel>
        )}
      </div>
    </Dialog>
  );
};
