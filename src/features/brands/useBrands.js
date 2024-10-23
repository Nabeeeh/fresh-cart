import { useQuery } from "react-query";

import { getAllBrandsApi } from "../../services/apiBrands";
import toast from "react-hot-toast";

export function useBrands() {
  const { data: allBrands, isLoading: isLoadingAllBrands } = useQuery({
    queryKey: ["allBrands"],
    queryFn: () => getAllBrandsApi(),

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { allBrands, isLoadingAllBrands };
}
