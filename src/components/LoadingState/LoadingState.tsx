import { ClipLoader } from "react-spinners";
import { VStack } from "@/components";

export const LoadingState = () => {
  return (
    <VStack className="flex-1 justify-center items-center">
      <ClipLoader size={30} color="#3b82f6" />
    </VStack>
  );
};
