import {
  LoadingState,
  Modal,
  Pagination,
  VehicleCard,
  VStack,
} from "@/components";
import { useData, useModal, useRoutes, useTrips } from "@/hooks";
import { AsyncPaginate } from "react-select-async-paginate";
import "./App.css";
import { customStyles } from "@/constants";
import { isEmptyList } from "@/utils";

function App() {
  // Custom hooks
  const {
    vehicles,
    vehicle,
    trips,
    routes,
    filter,
    setFilter,
    handleVehicleCardClick,
    paginationProps,
    loading,
    loadingDetail,
  } = useData();
  const { openModal, ...modal } = useModal();
  const { loadRouteOptions } = useRoutes();
  const { loadTripOptions } = useTrips(filter);

  return (
    <div className="screen flex flex-col p-6 gap-8">
      {/* Title */}
      <h1 className="font-bold mb-6 text-center">Fleet Management</h1>

      {/* Filter Bar */}
      <div className={"flex gap-8"}>
        {/* Route */}
        <div className={"flex flex-1 flex-col"}>
          <label className="font-medium mb-1 block">Route(s) filter</label>
          <AsyncPaginate
            isMulti
            value={filter.routes}
            loadOptions={loadRouteOptions}
            onChange={(newRoutes) =>
              setFilter({ ...filter, routes: [...newRoutes] })
            }
            styles={customStyles}
          />
        </div>

        {/* Trip */}
        <div className={"flex flex-1 flex-col"}>
          <label className="font-medium mb-1 block">Trip(s) filter</label>
          <AsyncPaginate
            isDisabled={isEmptyList(filter.routes)}
            isMulti
            value={filter.trips}
            loadOptions={loadTripOptions}
            onChange={(newRoutes) =>
              setFilter({ ...filter, trips: [...newRoutes] })
            }
            styles={customStyles}
          />
        </div>
      </div>

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
                  handleVehicleCardClick(vehicle.id);
                  openModal();
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
      <Modal
        isLoading={loadingDetail}
        vehicle={vehicle}
        trips={trips}
        routes={routes}
        {...modal}
      />
    </div>
  );
}

export default App;
