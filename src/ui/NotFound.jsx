import err from "../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={err} alt="404" className="w-100  vh-100 " />
    </div>
  );
};

export default NotFound;
