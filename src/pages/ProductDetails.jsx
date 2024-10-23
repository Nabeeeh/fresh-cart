import { Helmet } from "react-helmet";
import { TailSpin } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";

import { useUserToken } from "../Context/useUserToken";

import { useProductDetails } from "../features/products/useProductDetails";
import { useAddProductToCart } from "../features/cart/useAddProductToCart";
import { useAddProductToWishList } from "../features/wishlist/useAddProductToWishList";
import { useWhishListProducts } from "../features/wishlist/useWhishListProducts";
import { useRemoveProductFromWishList } from "../features/wishlist/useRemoveProductFromWishList";

const ProductDetails = () => {
  const { userToken } = useUserToken();
  const navigate = useNavigate();
  const { productID } = useParams();

  const { productDetails, isLoadingProductDetails } = useProductDetails();
  const { addToCart, isLoadingAddProductToCart } = useAddProductToCart();
  const { whishListProducts } = useWhishListProducts();
  const { addProductToWishList } = useAddProductToWishList();

  const { removeProductFromWhishList } = useRemoveProductFromWishList();

  const isInWishList = whishListProducts?.some(
    (wishProduct) => wishProduct.id === productID
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <div className="row py-5 align-items-center">
        {isLoadingProductDetails && (
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

        {productDetails && !isLoadingProductDetails && (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{productDetails?.title}</title>
            </Helmet>

            <div className="col-lg-3 col-md-4 col-sm-5">
              <Slider {...settings}>
                {productDetails.images.map((image, i) => (
                  <img
                    src={image}
                    className="w-100"
                    alt={productDetails?.title}
                    key={i}
                  />
                ))}
              </Slider>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-7 py-5">
              <h2 className="h5">{productDetails?.title}</h2>
              <p className="mt-4">{productDetails?.description}</p>
              <p className="text-main">{productDetails?.category?.name}</p>
              <div className="d-flex align-items-center justify-content-between">
                <p>{productDetails.price} EGP</p>
                <p>
                  <i className="fa-solid fa-star rating-color"></i>{" "}
                  {productDetails?.ratingsAverage}
                </p>
              </div>

              <div className="d-flex align-items-baseline justify-content-between px-2 mt-3">
                <button
                  disabled={isLoadingAddProductToCart}
                  onClick={() =>
                    userToken
                      ? addToCart({ productID, userToken })
                      : navigate("/login")
                  }
                  className="btn bg-main text-white w-75 "
                >
                  Add to Cart
                </button>

                {isInWishList ? (
                  <i
                    className="fa-solid fs-2 fa-heart text-danger cursor-pointer wish-button"
                    onClick={() =>
                      removeProductFromWhishList({
                        productId: productID,
                        userToken,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    className="fa-regular fs-2 fa-heart cursor-pointer wish-button"
                    onClick={() =>
                      addProductToWishList({ productId: productID, userToken })
                    }
                  ></i>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
