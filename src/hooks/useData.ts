import { useEffect, useState } from "react";
import type { IOption, IVehicleDetail, IVehicles } from "@/types";
import { PAGINATION_OPTIONS } from "@/constants";
import { fetchVehicleDetail, fetchVehicles } from "@/api";

export function useData() {
  // Local state

  // Pagination & Limit
  const [limit, setLimit] = useState<IOption>(PAGINATION_OPTIONS[0]);

  // Data
  const [vehicles, setVehicles] = useState<IVehicles | undefined>();
  const [vehicle, setVehicle] = useState<IVehicleDetail | undefined>();

  // Loading
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);

  // Vehicles list
  const handleFetchVehicles = async (limitData: number, offsetData: number) => {
    // Fetch users
    try {
      setLoading(true);
      const results = await fetchVehicles(limitData, offsetData);
      setVehicles(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchVehicles(limit.value as number, 0);
  }, [limit.value]);

  // Vehicle detail
  const handleFetchVehicleDetail = async (id: string) => {
    // Fetch users
    try {
      setLoadingDetail(true);
      const results = await fetchVehicleDetail(id);
      setVehicle(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleVehicleCardClick = async (id: string) => {
    await handleFetchVehicleDetail(id);
  };

  // Pagination information
  const information: string = "";

  // Props for pagination component
  const paginationProps = {
    limit,
    onLimitChange: setLimit,
    information,
  };

  return {
    vehicles,
    vehicle,
    handleVehicleCardClick,
    limit,
    setLimit,
    paginationProps,
    information,
    loading,
    loadingDetail,
  };
}
