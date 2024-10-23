import { useFormik } from "formik";
import { FallingLines } from "react-loader-spinner";
import * as yup from "yup";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const { login, isLoadingLogin } = useLogin();

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;

  const formValidation = yup.object({
    email: yup.string().email("email is inValid").required("email is required"),
    password: yup
      .string()
      .matches(passwordRegex, "Password is inValid")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidation,
    onSubmit: login,
  });

  return (
    <div className="w-75 mx-auto py-5">
      <h2 className="mb-3">Login </h2>

      <form onSubmit={formik.handleSubmit}>
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

        <button
          disabled={!(formik.isValid && formik.dirty) || isLoadingLogin}
          className="btn mt-3 text-white bg-main"
          type="submit"
        >
          Login
          {isLoadingLogin && (
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

export default LoginForm;
