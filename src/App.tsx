import {
  LoadingState,
  Modal,
  Pagination,
  VehicleCard,
  VStack,
} from "@/components";
import { useData, useModal } from "@/hooks";
import "./App.css";

function App() {
  // Custom hooks
  const {
    vehicles,
    vehicle,
    handleVehicleCardClick,
    paginationProps,
    loading,
    loadingDetail,
  } = useData();
  const { openModal, ...modal } = useModal();

  return (
    <div className="screen flex flex-col p-6 gap-8">
      {/* Title */}
      <h1 className="font-bold mb-6 text-center">Fleet Management</h1>

      {/* Filter Bar */}
      {/*<div className={"flex gap-8"}>*/}
      {/*  /!* Route *!/*/}
      {/*  <Dropdown<OptionType>*/}
      {/*    label={"Select Route(s)"}*/}
      {/*    isMulti*/}
      {/*    // @ts-expect-error: fix later*/}
      {/*    loadFunction={() => {}}*/}
      {/*    onChange={() => {}}*/}
      {/*    onInputChange={() => {}}*/}
      {/*    onMenuOpen={() => {}}*/}
      {/*    onMenuClose={() => {}}*/}
      {/*    value={value}*/}
      {/*    loadOptions={() => {}}*/}
      {/*  />*/}

      {/*  /!* Trip *!/*/}
      {/*  <Dropdown<OptionType>*/}
      {/*    label={"Select Trip(s)"}*/}
      {/*    isMulti*/}
      {/*    // @ts-expect-error: fix later*/}
      {/*    loadFunction={() => {}}*/}
      {/*    onChange={() => {}}*/}
      {/*    onInputChange={() => {}}*/}
      {/*    onMenuOpen={() => {}}*/}
      {/*    onMenuClose={() => {}}*/}
      {/*    value={value}*/}
      {/*    loadOptions={() => {}}*/}
      {/*  />*/}
      {/*</div>*/}

      {/* Card List */}
      {loading ? (
        // Loading
        <LoadingState />
      ) : vehicles?.data.length ? (
        // Data Found
        <VStack className={"flex-1 gap-4 overflow-y-auto"}>
          {vehicles.data.map((vehicle, index) => {
            return (
              <VehicleCard
                key={`${index}-vehicle-card`}
                onClick={() => {
                  openModal();
                  handleVehicleCardClick(vehicle.id);
                }}
                {...vehicle.attributes}
              />
            );
          })}
        </VStack>
      ) : (
        // No data
        <VStack className="flex-1 justify-center items-center">
          No result found!
        </VStack>
      )}

      {/* Pagination */}
      <Pagination {...paginationProps} />

      {/* Detail Modal */}
      <Modal isLoading={loadingDetail} vehicle={vehicle} {...modal} />
    </div>
  );
}

export default App;
