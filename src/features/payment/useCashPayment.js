import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { cashPaymentApi } from "../../services/apiPayment";
import toast from "react-hot-toast";

export function useCashPayment() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: cashPay, isLoading: isLoadingCashPayment } = useMutation({
    mutationFn: ({ cartId, shippingAddress, userToken }) =>
      cashPaymentApi({ cartId, shippingAddress, userToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });
      navigate("/allorders");
      toast.success("Payment Successfully", { duration: 2500 });
    },
    onError: () => {
      toast.success("Payment Failed", { duration: 2500 });
    },
  });

  return { cashPay, isLoadingCashPayment };
}
