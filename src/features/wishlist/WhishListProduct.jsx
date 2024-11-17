import { Link } from "react-router-dom";
import { useUserToken } from "../../Context/useUserToken";
import { useAddProductToCart } from "../cart/useAddProductToCart";
import { useRemoveProductFromWishList } from "./useRemoveProductFromWishList";

// eslint-disable-next-line react/prop-types
const WhishListProduct = ({ wishProduct = {} }) => {
  const { userToken } = useUserToken();
  const productID = wishProduct?.id;

  const { addToCart, isLoadingAddProductToCart } = useAddProductToCart();
  const { removeProductFromWhishList, isLoadingRemoveProductFromWishList } =
    useRemoveProductFromWishList();

  return (
    <div className="row py-2 border-bottom bg-main-light rounded-1">
      <div className="col-md-1 col-sm-2 d-flex justify-content-center align-items-center">
        <Link to={`/products/productDetails/${wishProduct?.id}`}>
          <img
            className="w-100"
            src={wishProduct?.imageCover}
            alt={wishProduct?.title}
          />
        </Link>
      </div>
      <div className="col-md-11 col-sm-10 py-3 d-flex justify-content-between align-items-center">
        <div>
          <h5>{wishProduct?.title.split(" ").slice(0, 6).join(" ")}</h5>
          <p className="text-main">Price : {wishProduct?.price} EGP</p>

          <button
            disabled={isLoadingRemoveProductFromWishList}
            onClick={() =>
              removeProductFromWhishList({ productId: productID, userToken })
            }
            className="btn btn-outline-danger fw-bold py-0"
          >
            <i className="fas fa-trash-can "></i> Remove
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            disabled={isLoadingAddProductToCart}
            onClick={() => addToCart({ productID, userToken })}
            className="btn bg-main text-white btn-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhishListProduct;
