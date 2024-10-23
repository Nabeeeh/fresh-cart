import { useMutation, useQueryClient } from "react-query";
import { removeProductFromWhishListApi } from "../../services/apiWhishList";
import toast from "react-hot-toast";

export function useRemoveProductFromWishList() {
  const queryClient = useQueryClient();

  const {
    mutate: removeProductFromWhishList,
    isLoading: isLoadingRemoveProductFromWishList,
  } = useMutation({
    mutationFn: ({ productId, userToken }) =>
      removeProductFromWhishListApi({ productId, userToken }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["whishList"] });
      toast.success(data.message, { duration: 2500 });
    },
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  return { removeProductFromWhishList, isLoadingRemoveProductFromWishList };
}
