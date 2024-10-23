import { useUserToken } from "../../Context/useUserToken";
import { useRemoveProductToCart } from "./useRemoveProductToCart";
import { useUpdateProductQuantity } from "./useUpdateProductQuantity";

// eslint-disable-next-line react/prop-types
const CartProduct = ({ cartProduct = {} }) => {
  const { userToken } = useUserToken();
  const productID = cartProduct?.product.id;
  const productCount = cartProduct?.count;

  const { removeProductToCart, isLoadingRemoveProductCart } =
    useRemoveProductToCart();

  const { updateProductQuantity } = useUpdateProductQuantity();

  return (
    <div className="row py-1 border-bottom">
      <div className="col-md-1 col-sm-2">
        <img
          className="w-100"
          src={cartProduct?.product.imageCover}
          alt={cartProduct?.product.title}
        />
      </div>
      <div className="col-md-11 col-sm-10 py-3 d-flex justify-content-between align-items-center">
        <div>
          <h5>{cartProduct?.product.title.split(" ").slice(0, 6).join(" ")}</h5>
          <p className="text-main">Price : {cartProduct?.price} EGP</p>

          <button
            onClick={() => removeProductToCart({ productID, userToken })}
            disabled={isLoadingRemoveProductCart}
            className="btn btn-outline-danger fw-bold py-0"
          >
            <i className="fas fa-trash-can "></i> Remove
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            onClick={() =>
              updateProductQuantity({
                productID,
                count: productCount + 1,
                userToken,
              })
            }
            className="btn btn-outline-success"
          >
            +
          </button>

          <span className="px-3 fw-bolder">{cartProduct?.count}</span>

          <button
            disabled={cartProduct.count === 1}
            onClick={() =>
              updateProductQuantity({
                productID,
                count: productCount - 1,
                userToken,
              })
            }
            className="btn btn-outline-success"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
