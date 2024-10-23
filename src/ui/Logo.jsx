import { Link } from "react-router-dom";
import logo from "../assets/images/freshcart-logo.svg";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="fresh cart logo" />
    </Link>
  );
};

export default Logo;
