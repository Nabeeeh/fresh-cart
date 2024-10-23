import { useMutation, useQueryClient } from "react-query";
import { removeCartProductApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useRemoveProductToCart() {
  const queryClient = useQueryClient();

  const { mutate: removeProductToCart, isLoading: isLoadingRemoveProductCart } =
    useMutation({
      mutationFn: ({ productID, userToken }) =>
        removeCartProductApi({ productID, userToken }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });
        toast.success("Product Successfully Deleted", { duration: 2500 });
      },
      onError: (error) => {
        toast.error(error.data.message);
      },
    });

  return { removeProductToCart, isLoadingRemoveProductCart };
}
