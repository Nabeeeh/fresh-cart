import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import { useUserToken } from "../Context/useUserToken";
import { useLoggedUserCart } from "../features/cart/useLoggedUserCart";
import { useClearCart } from "../features/cart/useClearCart";

import CartProduct from "../features/cart/CartProduct";

const Cart = () => {
  const { userToken } = useUserToken();

  const { loggedUserCart, isLoadingCart } = useLoggedUserCart();
  const { clearCart, isLoadingClearCart } = useClearCart();

  if (!userToken) return;

  return (
    <>
      {loggedUserCart?.data.products.length === 0 && (
        <p className="text-center fw-bolder fs-4 p-2">Your Cart is Empty</p>
      )}

      {isLoadingCart && (
        <TailSpin
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="justify-content-center"
        />
      )}

      {loggedUserCart && loggedUserCart?.data.products.length !== 0 && (
        <div className="container-fluid bg-main-light rounded my-3">
          <h3 className="py-3 fw-bold">Shop Cart :</h3>

          <div className="d-flex flex-column align-items-center justify-content-between px-4">
            <p>
              Total Cart Items :
              <span className="text-main fw-semibold">
                {" "}
                {loggedUserCart?.numOfCartItems}{" "}
              </span>
            </p>
            <p>
              Total Cart Price :
              <span className="text-main fw-semibold">
                {loggedUserCart?.data.totalCartPrice} EGP
              </span>
            </p>
          </div>

          {loggedUserCart?.data.products.map((cartProduct) => (
            <CartProduct
              cartProduct={cartProduct}
              key={cartProduct.product.id}
            />
          ))}

          <div className="d-flex align-items-center justify-content-between p-3">
            <Link to="/checkout" className="btn btn-success text-white">
              Continue Ordering
            </Link>

            <button
              onClick={() => clearCart(userToken)}
              disabled={isLoadingClearCart}
              className="btn btn-danger"
              type="button"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
