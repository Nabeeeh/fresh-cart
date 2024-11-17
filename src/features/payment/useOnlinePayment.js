import { useMutation, useQueryClient } from "react-query";
import { onlinePaymentApi } from "../../services/apiPayment";
import toast from "react-hot-toast";

export function useOnlinePayment() {
  const queryClient = useQueryClient();

  const { mutate: onlinePay, isLoading: isLoadingOnlinePayment } = useMutation({
    mutationFn: ({ cartId, shippingAddress, userToken }) =>
      onlinePaymentApi({ cartId, shippingAddress, userToken }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });

      window.location.href = data?.session.url;
    },
    onError: () => {
      toast.success("Payment Failed", { duration: 2500 });
    },
  });

  return { onlinePay, isLoadingOnlinePayment };
}
