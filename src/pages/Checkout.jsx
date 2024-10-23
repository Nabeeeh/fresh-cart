import { useFormik } from "formik";
import * as yup from "yup";
import { FallingLines } from "react-loader-spinner";

import { useUserToken } from "../Context/useUserToken";
import { useLoggedUserCart } from "../features/cart/useLoggedUserCart";
import { useOnlinePayment } from "../features/payment/useOnlinePayment";
import { useCashPayment } from "../features/payment/useCashPayment";

const Checkout = () => {
  const { userToken } = useUserToken();

  const { loggedUserCart } = useLoggedUserCart();
  const { onlinePay, isLoadingOnlinePayment } = useOnlinePayment();
  const { cashPay, isLoadingCashPayment } = useCashPayment();

  const cartId = loggedUserCart?.cartId;

  const phoneRegex = /^01[0125][0-9]{8}$/gm;

  const formValidation = yup.object({
    phone: yup
      .string()
      .matches(phoneRegex, "Phone number is inValid")
      .required("Phone number is required"),

    city: yup.string().required("City is required"),
    details: yup.string().required("Address Details is required"),
    cashPay: yup.boolean().optional(),
  });

  const orderSubmitHandler = async function (values) {
    try {
      if (values.cashPay) {
        cashPay({ cartId, shippingAddress: values, userToken });
      }

      if (!values.cashPay) {
        onlinePay({ cartId, shippingAddress: values, userToken });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      city: "",
      details: "",
      cashPay: false,
    },
    validationSchema: formValidation,
    onSubmit: orderSubmitHandler,
  });

  return (
    <div className="mx-auto bg-main-light p-5">
      <h3>Shipping Address</h3>
      <form className="py-3" onSubmit={formik.handleSubmit}>
        <label className="mb-2 fw-bold" htmlFor="phone">
          Phone :
        </label>
        <input
          className="form-control mb-2"
          type="tel"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.phone && formik.touched.phone && (
          <p className="alert alert-danger py-1 ">{formik.errors.phone}</p>
        )}

        <label className="mb-2 fw-bold" htmlFor="city">
          City :
        </label>
        <input
          className="form-control mb-2"
          type="text"
          id="city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.city && formik.touched.city && (
          <p className="alert alert-danger py-1 ">{formik.errors.city}</p>
        )}

        <label className="mb-2 fw-bold" htmlFor="details">
          Details :
        </label>
        <textarea
          className="form-control mb-2"
          id="details"
          name="details"
          placeholder="Address Details"
          value={formik.values.details}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.details && formik.touched.details && (
          <p className="alert alert-danger py-1 ">{formik.errors.details}</p>
        )}

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="cashPay"
            id="cashPay"
            value={formik.values.cashPay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="cashPay" className="form-check-label fw-bold">
            Pay with Cash
          </label>
        </div>

        <button
          disabled={
            !(formik.isValid && formik.dirty) ||
            isLoadingOnlinePayment ||
            isLoadingCashPayment
          }
          className="btn mt-3  text-white bg-main"
          type="submit"
        >
          Pay Now
          {isLoadingOnlinePayment && (
            <FallingLines
              color="#fff"
              width="30"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          )}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
