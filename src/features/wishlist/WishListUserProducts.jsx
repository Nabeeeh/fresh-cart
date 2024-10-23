import { TailSpin } from "react-loader-spinner";
import { useWhishListProducts } from "./useWhishListProducts";
import WhishListProduct from "./WhishListProduct";

const WishListUserProducts = () => {
  const { whishListProducts, isLoadingWhishList } = useWhishListProducts();

  return (
    <>
      <h2 className="fw-bold py-3">WishList</h2>

      {whishListProducts?.length === 0 && (
        <p className="text-center fw-bolder fs-4 p-2">
          No Wish Products Found!
        </p>
      )}

      {isLoadingWhishList && (
        <TailSpin
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="justify-content-center"
          visible={true}
        />
      )}

      {whishListProducts?.map((wishProduct) => (
        <WhishListProduct key={wishProduct.id} wishProduct={wishProduct} />
      ))}
    </>
  );
};

export default WishListUserProducts;
