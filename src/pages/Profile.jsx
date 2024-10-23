import { jwtDecode } from "jwt-decode";
import { useUserToken } from "../Context/useUserToken";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userToken } = useUserToken();

  const userData = jwtDecode(userToken);

  return (
    <>
      <div className="p-3">
        <h2 className="fw-bold ">
          Welcome, <span className="text-main fw-bolder">{userData?.name}</span>
        </h2>

        <Link
          to="/allorders"
          className="btn btn-lg mt-4 fs-5 text-white bg-main"
        >
          My Orders
        </Link>
      </div>
    </>
  );
};

export default Profile;
