import { Circles } from "react-loader-spinner";
import ProductItem from "./ProductItem";
import { useFeaturedProducts } from "./useFeaturedProducts";

const FeaturedProducts = () => {
  const { featuredProducts, isLoadingFeaturedProducts } = useFeaturedProducts();

  return (
    <div className="py-5">
      <h2>Featured Products</h2>
      <div className="row py-2">
        {isLoadingFeaturedProducts && (
          <Circles
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="justify-content-center"
            visible={true}
          />
        )}

        {featuredProducts &&
          featuredProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
