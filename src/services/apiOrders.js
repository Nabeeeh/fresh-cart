import axios from "axios";

export async function getUserOrdersApi(userID) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
