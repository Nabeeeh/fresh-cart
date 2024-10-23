import { TailSpin } from "react-loader-spinner";
import Category from "./Category";
import { useCategories } from "./useCategories";

const AllCategories = () => {
  const { allCategories, isLoadingCategories } = useCategories();

  return (
    <div>
      <h2 className="fw-bold py-3">Categories</h2>
      {isLoadingCategories && (
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

      <div className="row py-2 g-5">
        {allCategories?.map((category) => (
          <div
            key={category._id}
            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 shadow-sm"
          >
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
