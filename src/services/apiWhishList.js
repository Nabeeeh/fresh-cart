import axios from "axios";

export async function getAllWhishListProductsApi({ userToken }) {
  if (!userToken) return;

  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      { headers: { token: userToken } }
    );

    return data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function addProductToWhishListApi({ productId, userToken }) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      { productId: productId },
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function removeProductFromWhishListApi({ productId, userToken }) {
  try {
    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
