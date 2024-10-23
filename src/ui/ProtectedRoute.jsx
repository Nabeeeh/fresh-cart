import { Navigate } from "react-router-dom";
import { useUserToken } from "../Context/useUserToken";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userToken } = useUserToken();

  if (userToken) return children;
  else return <Navigate to="/login" />;
};

export default ProtectedRoute;
