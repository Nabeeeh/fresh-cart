// eslint-disable-next-line react/prop-types
const Brand = ({ brand = {} }) => {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 shadow-sm">
      <img
        className="w-100"
        height={200}
        src={brand?.image}
        alt={brand?.slug}
      />
      <h6 className="text-center fw-semibold pt-2">{brand?.name}</h6>
    </div>
  );
};

export default Brand;
