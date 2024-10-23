import { useFormik } from "formik";
import { FallingLines } from "react-loader-spinner";
import * as yup from "yup";

import { useRegister } from "./useRegister";

const RegisterForm = () => {
  const { register, isLoadingRegister } = useRegister();

  const phoneRegex = /^01[0125][0-9]{8}$/gm;

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;

  const formValidation = yup.object({
    name: yup
      .string()
      .min(3, "name minimum length is 3")
      .max(12, "name maximum length is 12")
      .required("named is required"),
    email: yup.string().email("email is inValid").required("email is required"),
    phone: yup
      .string()
      .matches(phoneRegex, "Phone number is inValid")
      .required("Phone number is required"),
    password: yup
      .string()
      .matches(passwordRegex, "Password is inValid")
      .required("Password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), "the password is not the same"])
      .required("repeat password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: formValidation,
    onSubmit: register,
  });

  return (
    <div className="w-75 mx-auto py-5">
      <h2 className="mb-3">Register Now</h2>

      <form onSubmit={formik.handleSubmit}>
        <label className="mb-2" htmlFor="name">
          Name :
        </label>
        <input
          className="form-control mb-2"
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="alert alert-danger py-1 ">{formik.errors.name}</p>
        )}

        <label className="mb-2" htmlFor="email">
          Email :
        </label>
        <input
          className="form-control mb-2"
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="alert alert-danger py-1 ">{formik.errors.email}</p>
        )}

        <label className="mb-2" htmlFor="phone">
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

        <label className="mb-2" htmlFor="password">
          Password :
        </label>
        <input
          className="form-control mb-2"
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="alert alert-danger py-1 ">{formik.errors.password}</p>
        )}

        <label className="mb-2" htmlFor="rePassword">
          rePassword :
        </label>
        <input
          className="form-control mb-2"
          type="password"
          id="rePassword"
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.rePassword && formik.touched.rePassword && (
          <p className="alert alert-danger py-1 ">{formik.errors.rePassword}</p>
        )}

        <button
          disabled={!(formik.isValid && formik.dirty) || isLoadingRegister}
          className="btn mt-3 text-white bg-main"
          type="submit"
        >
          Register
          {isLoadingRegister && (
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

export default RegisterForm;
