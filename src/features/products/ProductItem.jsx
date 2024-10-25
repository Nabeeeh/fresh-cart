import { Link, useNavigate } from "react-router-dom";
import { useAddProductToCart } from "../cart/useAddProductToCart";
import { useUserToken } from "../../Context/useUserToken";
import { useAddProductToWishList } from "../wishlist/useAddProductToWishList";
import { useWhishListProducts } from "../wishlist/useWhishListProducts";
import { useRemoveProductFromWishList } from "../wishlist/useRemoveProductFromWishList";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ product = {} }) => {
  const { userToken } = useUserToken();
  const navigate = useNavigate();

  const productID = product?.id;

  const { whishListProducts } = useWhishListProducts();
  const { addToCart, isLoadingAddProductToCart } = useAddProductToCart();
  const { addProductToWishList } = useAddProductToWishList();

  const { removeProductFromWhishList } = useRemoveProductFromWishList();

  const isInWishList = whishListProducts?.some(
    (wishProduct) => wishProduct.id === productID
  );

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 ">
      <div className="product py-3 px-2">
        <Link to={`/products/productDetails/${product?.id}`}>
          <img
            className="w-100"
            src={product?.imageCover}
            alt={product?.title}
          />

          <h6 className="text-main pt-1">{product?.category?.name}</h6>
          <h6>{product?.title?.split(" ").slice(0, 4).join(" ")}</h6>

          <div className="d-flex align-items-center justify-content-between">
            <p>{product?.price} EGP</p>
            <p>
              <i className="fa-solid fa-star rating-color"></i>{" "}
              {product?.ratingsAverage}
            </p>
          </div>
        </Link>

        <div className="d-flex align-items-center justify-content-between mt-3 ">
          <button
            disabled={isLoadingAddProductToCart}
            onClick={() =>
              userToken
                ? addToCart({ productID, userToken })
                : navigate("/login")
            }
            className="btn bg-main text-white btn-sm"
          >
            Add to Cart
          </button>

          {isInWishList ? (
            <i
              className="fa-solid fs-3 fa-heart text-danger cursor-pointer wish"
              onClick={() =>
                userToken
                  ? removeProductFromWhishList({
                      productId: productID,
                      userToken,
                    })
                  : navigate("/login")
              }
            ></i>
          ) : (
            <i
              className="fa-regular fs-3 fa-heart cursor-pointer wish"
              onClick={() =>
                userToken
                  ? addProductToWishList({ productId: productID, userToken })
                  : navigate("/login")
              }
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
