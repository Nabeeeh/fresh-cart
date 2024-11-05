import { useQuery } from "react-query";
import toast from "react-hot-toast";

import { useUserToken } from "../../Context/useUserToken";
import { getLoggedUserCartApi } from "../../services/apiCart";

export function useLoggedUserCart() {
  const { userToken } = useUserToken();

  const { data: loggedUserCart, isLoading: isLoadingCart } = useQuery({
    queryKey: ["loggedUserCart"],
    queryFn: () => getLoggedUserCartApi(userToken),
    enabled: !!userToken,

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { loggedUserCart, isLoadingCart };
}
