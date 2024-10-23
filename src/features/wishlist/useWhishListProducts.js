import { useQuery } from "react-query";
import { getAllWhishListProductsApi } from "../../services/apiWhishList";
import { useUserToken } from "../../Context/useUserToken";
import toast from "react-hot-toast";

export function useWhishListProducts() {
  const { userToken } = useUserToken();

  const { data: whishListProducts, isLoading: isLoadingWhishList } = useQuery({
    queryKey: ["whishList"],
    queryFn: () => getAllWhishListProductsApi({ userToken }),
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  return { whishListProducts, isLoadingWhishList };
}
