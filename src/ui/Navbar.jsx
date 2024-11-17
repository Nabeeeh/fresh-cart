import { NavLink, useNavigate } from "react-router-dom";

import { useUserToken } from "../Context/useUserToken";
import { useLoggedUserCart } from "../features/cart/useLoggedUserCart";

import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const { userToken, removeUserTokenFromCookies } = useUserToken();

  const { loggedUserCart } = useLoggedUserCart();

  const logOut = () => {
    removeUserTokenFromCookies();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll column-gap-2">
            <li className="nav-item">
              <NavLink
                className="nav-link  text-success fw-bolder"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link  text-success fw-bolder"
                aria-current="page"
                to="/categories"
              >
                Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link  text-success fw-bolder "
                aria-current="page"
                to="/brands"
              >
                Brands
              </NavLink>
            </li>

            {userToken && (
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-success fw-bolder "
                  aria-current="page"
                  to="/wishlist"
                >
                  Wishlist
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 column-gap-4">
            {userToken && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/cart">
                    <i className="fa-solid fa-1x fa-cart-shopping text-success position-relative">
                      {loggedUserCart?.numOfCartItems > 0 && (
                        <span className="badge bg-danger mx-2 rounded-circle position-absolute start-50 bottom-50 ">
                          {loggedUserCart?.numOfCartItems}
                        </span>
                      )}
                    </i>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link  text-success"
                    aria-current="page"
                    to="/profile"
                  >
                    <i className="fa-solid fa-user  fa-1x"></i>
                  </NavLink>
                </li>
              </>
            )}

            {!userToken && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  text-success fw-bolder"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link  text-success fw-bolder"
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {userToken && (
              <li className="nav-item ">
                <button
                  type="button"
                  className="nav-link btn text-danger fw-bolder "
                  onClick={logOut}
                  aria-current="page"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
