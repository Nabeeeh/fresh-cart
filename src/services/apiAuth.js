import axios from "axios";

export async function registerApi(values) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function loginApi(values) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      values
    );

    localStorage.setItem("userToken", data.token);

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
