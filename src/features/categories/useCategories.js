import { useQuery } from "react-query";
import { getAllCategoriesApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useCategories() {
  const { data: allCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategoriesApi,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { allCategories, isLoadingCategories };
}
