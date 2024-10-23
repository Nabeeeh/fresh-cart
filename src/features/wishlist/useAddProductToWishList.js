import { useMutation, useQueryClient } from "react-query";
import { addProductToWhishListApi } from "../../services/apiWhishList";
import toast from "react-hot-toast";

export function useAddProductToWishList() {
  const queryClient = useQueryClient();

  const {
    mutate: addProductToWishList,
    isLoading: isLoadingAddProductToWishList,
  } = useMutation({
    mutationFn: ({ productId, userToken }) =>
      addProductToWhishListApi({ productId, userToken }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["whishList"] });
      toast.success(data.message, {
        duration: 2500,
      });
    },
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  return { addProductToWishList, isLoadingAddProductToWishList };
}
