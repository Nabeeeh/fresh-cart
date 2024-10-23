import Slider from "react-slick";
import { useCategories } from "./useCategories";
import { Circles } from "react-loader-spinner";
import Category from "./Category";

const CategoriesSlider = () => {
  const { allCategories, isLoadingCategories } = useCategories();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 5000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {isLoadingCategories && (
        <Circles
          height="60"
          width="60"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="justify-content-center"
          visible={true}
        />
      )}

      <Slider {...settings}>
        {allCategories &&
          allCategories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
      </Slider>
    </>
  );
};

export default CategoriesSlider;
