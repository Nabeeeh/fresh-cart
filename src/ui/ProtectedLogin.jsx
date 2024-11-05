/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useUserToken } from "../Context/useUserToken";

const ProtectedLogin = ({ children }) => {
  const { userToken } = useUserToken();

  if (userToken) return <Navigate to="/" />;
  else return children;
};

export default ProtectedLogin;
