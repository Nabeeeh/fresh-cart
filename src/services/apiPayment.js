import axios from "axios";

export async function onlinePaymentApi({ cartId, shippingAddress, userToken }) {
  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
      { shippingAddress },
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function cashPaymentApi({ cartId, shippingAddress, userToken }) {
  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      { shippingAddress },
      { headers: { token: userToken } }
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
