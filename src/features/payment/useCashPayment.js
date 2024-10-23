import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { cashPaymentApi } from "../../services/apiPayment";

export function useCashPayment() {
  const navigate = useNavigate();

  const { mutate: cashPay, isLoading: isLoadingCashPayment } = useMutation({
    mutationFn: ({ cartId, shippingAddress, userToken }) =>
      cashPaymentApi({ cartId, shippingAddress, userToken }),
    onSuccess: () => {
      navigate("/allorders");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { cashPay, isLoadingCashPayment };
}
