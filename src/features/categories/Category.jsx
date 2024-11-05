// eslint-disable-next-line react/prop-types
const Category = ({ category = {} }) => {
  return (
    <div>
      <img
        className="w-100"
        height={160}
        src={category?.image}
        alt={category?.slug}
      />
      <h6 className="text-center fw-semibold pt-2">{category?.name}</h6>
    </div>
  );
};

export default Category;
