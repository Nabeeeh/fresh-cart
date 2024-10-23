import axios from "axios";

export async function getFeaturedProductsApi() {
  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );

    return data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getProductDetailsApi(productID) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${productID}`
    );

    return data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
