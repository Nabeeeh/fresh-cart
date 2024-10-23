import { useMutation, useQueryClient } from "react-query";
import { updateProductQuantityApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useUpdateProductQuantity() {
  const queryClient = useQueryClient();

  const {
    mutate: updateProductQuantity,
    isLoading: isLoadingUpdateProductQuantity,
  } = useMutation({
    mutationFn: ({ productID, count, userToken }) =>
      updateProductQuantityApi({ productID, count, userToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });
      toast.success("Update Count Successfully", { duration: 2500 });
    },
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  return { updateProductQuantity, isLoadingUpdateProductQuantity };
}
