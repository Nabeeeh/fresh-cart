import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { clearCartApi } from "../../services/apiCart";

export function useClearCart() {
  const queryClient = useQueryClient();

  const { mutate: clearCart, isLoading: isLoadingClearCart } = useMutation({
    mutationFn: (userToken) => clearCartApi(userToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });
      toast.success("Cart cleared successfully", { duration: 2500 });
    },
    onError: (error) => {
      
      toast.error(error.data.message);
    },
  });

  return {
    clearCart,
    isLoadingClearCart,
  };
}
