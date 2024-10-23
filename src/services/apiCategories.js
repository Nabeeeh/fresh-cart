import axios from "axios";

export async function getAllCategoriesApi() {
  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );

    return data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
