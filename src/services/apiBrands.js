import axios from "axios";

export async function getAllBrandsApi() {
  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );

    return data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
