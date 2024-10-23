import { useMutation, useQueryClient } from "react-query";
import { loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserToken } from "../../Context/useUserToken";

export function useLogin() {
  const navigate = useNavigate();
  const { setUserTokenToLocalStorage } = useUserToken();

  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoadingLogin } = useMutation({
    mutationFn: (values) => loginApi(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["loggedUserCart"] });
      setUserTokenToLocalStorage(data.token);

      navigate("/", { replace: true });
      toast.success("Login successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoadingLogin };
}
