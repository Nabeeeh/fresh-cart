import Slider from "react-slick";

import slideImg1 from "../assets/images/slider-image-1.jpeg";
import slideImg2 from "../assets/images/slider-image-2.jpeg";
import slideImg3 from "../assets/images/slider-image-3.jpeg";

import blogImg1 from "../assets/images/blog-img-1.jpeg";
import blogImg2 from "../assets/images/blog-img-2.jpeg";

const MainSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <div className="row py-5 g-0">
      <div className="col-md-9">
        <Slider {...settings}>
          <div>
            <img
              height={360}
              className="w-100"
              src={slideImg1}
              alt="slider-image"
            />
          </div>
          <div>
            <img
              height={360}
              className="w-100"
              src={slideImg2}
              alt="slider-image"
            />
          </div>
          <div>
            <img
              height={360}
              className="w-100"
              src={slideImg3}
              alt="slider-image"
            />
          </div>
        </Slider>
      </div>

      <div className="col-md-3">
        <img height={180} className="w-100" src={blogImg1} alt="blog-image" />
        <img height={180} className="w-100" src={blogImg2} alt="blog-image" />
      </div>
    </div>
  );
};

export default MainSlider;
