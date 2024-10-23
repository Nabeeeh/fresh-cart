import { useQuery } from "react-query";
import { getProductDetailsApi } from "../../services/apiFeaturedProducts";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useProductDetails() {
  const { productID } = useParams();

  const { data: productDetails, isLoading: isLoadingProductDetails } = useQuery(
    {
      queryKey: ["productDetails", productID],
      queryFn: () => getProductDetailsApi(productID),
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  return { productDetails, isLoadingProductDetails };
}
