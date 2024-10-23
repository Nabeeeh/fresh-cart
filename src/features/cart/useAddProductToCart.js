import { useMutation, useQueryClient } from "react-query";
import { addProductToCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddProductToCart() {
  const queryClient = useQueryClient();

  const { mutate: addToCart, isLoading: isLoadingAddProductToCart } =
    useMutation({
      mutationFn: ({ productID, userToken }) =>
        addProductToCartApi({ productID, userToken }),
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });

        toast.success(data.message, { duration: 2500 });
      },
      onError: (error) => {
        toast.error(error.data.message);
      },
    });

  return { addToCart, isLoadingAddProductToCart };
}
