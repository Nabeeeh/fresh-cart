import { useMutation } from "react-query";
import { registerApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const {
    mutate: register,
    isLoading: isLoadingRegister,
    error,
  } = useMutation({
    mutationFn: (values) => registerApi(values),
    onSuccess: () => {
      navigate("/login");
      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { register, isLoadingRegister, error };
}
