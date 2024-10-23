import axios from "axios";

export async function getLoggedUserCartApi(userToken) {
  try {
    if (userToken) {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: { token: userToken },
        }
      );

      return data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function addProductToCartApi({ productID, userToken }) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: productID,
      },
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function removeCartProductApi({ productID, userToken }) {
  try {
    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateProductQuantityApi({
  productID,
  count,
  userToken,
}) {
  try {
    const { data } = await axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
      { count },
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function clearCartApi(userToken) {
  try {
    const { data } = await axios.delete(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
