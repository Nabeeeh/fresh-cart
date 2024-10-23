import { useMutation } from "react-query";
import { onlinePaymentApi } from "../../services/apiPayment";

export function useOnlinePayment() {
  const { mutate: onlinePay, isLoading: isLoadingOnlinePayment } = useMutation({
    mutationFn: ({ cartId, shippingAddress, userToken }) =>
      onlinePaymentApi({ cartId, shippingAddress, userToken }),
    onSuccess: (data) => {
      console.log(data);
      window.location.href = data?.session.url;
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { onlinePay, isLoadingOnlinePayment };
}
