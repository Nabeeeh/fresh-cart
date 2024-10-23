import { useQuery } from "react-query";
import { getUserOrdersApi } from "../../services/apiOrders";
import { useUserToken } from "../../Context/useUserToken";
import { jwtDecode } from "jwt-decode";

export function useUserOrders() {
  const { userToken } = useUserToken();

  const userData = jwtDecode(userToken);

  const { data: userOrders, isLoading: isLoadingUserOrders } = useQuery({
    queryKey: ["userOrders"],
    queryFn: () => getUserOrdersApi(userData?.id),
  });

  return { userOrders, isLoadingUserOrders };
}
