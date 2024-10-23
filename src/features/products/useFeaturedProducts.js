import { useQuery } from "react-query";
import { getFeaturedProductsApi } from "../../services/apiFeaturedProducts";
import toast from "react-hot-toast";

export function useFeaturedProducts() {
  const { data: featuredProducts, isLoading: isLoadingFeaturedProducts } =
    useQuery({
      queryKey: ["featuredProducts"],
      queryFn: getFeaturedProductsApi,

      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { featuredProducts, isLoadingFeaturedProducts };
}
