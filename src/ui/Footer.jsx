import amazonPayImg from "../assets/images/amazon-pay.png";
import americanExpressImg from "../assets/images/american-express.png";
import masterCardImg from "../assets/images/card.png";
import paypalImg from "../assets/images/paypal.png";
import playStoreImg from "../assets/images/playstore.png";
import appStoreImg from "../assets/images/app-store.png";

const Footer = () => {
  return (
    <footer className=" bg-main-light p-3 mt-4 ">
      <h2>Get the FreshCart app</h2>
      <div className="row py-3 gy-3">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <p className="mb-0">Payment Partners </p>
            <img
              src={amazonPayImg}
              alt="amazon-pay.png"
              className="mx-2 cursor-pointer"
            />
            <img
              src={americanExpressImg}
              alt="american-express.png"
              className="mx-2 cursor-pointer"
            />
            <img
              src={masterCardImg}
              alt="master-card.png"
              className="mx-2 cursor-pointer"
            />
            <img
              src={paypalImg}
              alt="payPal.png"
              className="mx-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <p className="mb-0">Get deliveries with FreshCart </p>
            <div>
              <img
                src={playStoreImg}
                alt="play-store.png"
                className="mx-2 cursor-pointer"
              />
              <img
                src={appStoreImg}
                alt="app-store.png"
                className="mx-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center column-gap-3 mt-2 pe-3">
        <p className="mb-0">Follow Us On Social Media Platforms</p>
        <i className="fa-brands fa-square-facebook fa-xl cursor-pointer"></i>
        <i className="fab fa-twitter fa-xl cursor-pointer"></i>
        <i className="fab fa-instagram fa-xl cursor-pointer"></i>
        <i className="fab fa-tiktok fa-xl cursor-pointer"></i>
        <i className="fab fa-youtube fa-xl cursor-pointer"></i>
      </div>
    </footer>
  );
};

export default Footer;
