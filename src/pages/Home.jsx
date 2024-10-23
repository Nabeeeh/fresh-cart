import { Helmet } from "react-helmet";
import MainSlider from "../ui/MainSlider";
import CategoriesSlider from "../features/categories/CategoriesSlider";
import FeaturedProducts from "../features/products/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fresh Cart Home</title>
      </Helmet>

      <MainSlider />
      <CategoriesSlider />
      <FeaturedProducts />
    </>
  );
};

export default Home;
