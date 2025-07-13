import Select from "react-select";
import { HStack } from "@/components";
import { PAGINATION_OPTIONS } from "@/constants";
import type { IPaginationProps } from "./Pagination.props";
import type { IOption } from "@/types";
import { ClipLoader } from "react-spinners";

export const Pagination = ({
  onBackPress,
  onNextPress,
  information,
  limit,
  onLimitChange,
  loading,
}: IPaginationProps) => {
  return (
    <HStack className="w-full bg-gray-300 px-8 py-2 rounded-full justify-between">
      {/* Left */}
      {!loading ? (
        <HStack className="gap-4 items-center">
          {/* Back */}
          {onBackPress && <button onClick={onBackPress}>Back</button>}

          {/* Next */}
          {onNextPress && <button onClick={onNextPress}>Next</button>}

          {/* Information */}
          <span className="text-black">{information}</span>
        </HStack>
      ) : (
        <ClipLoader size={30} color="#3b82f6" />
      )}

      {/* Right */}
      <HStack className="text-black items-center gap-4">
        <span>Limit</span>
        <Select<IOption>
          options={PAGINATION_OPTIONS}
          value={limit}
          onChange={(newLimit) =>
            onLimitChange({ ...(newLimit ?? PAGINATION_OPTIONS[0]) })
          }
        />
      </HStack>
    </HStack>
  );
};
