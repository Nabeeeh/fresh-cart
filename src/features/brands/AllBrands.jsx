import { TailSpin } from "react-loader-spinner";
import { useBrands } from "./useBrands";

import Brand from "./Brand";

const AllBrands = () => {
  const { allBrands, isLoadingAllBrands } = useBrands();

  return (
    <div>
      <h2 className="fw-bold py-3">Brands</h2>

      {isLoadingAllBrands && (
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
        {allBrands?.map((brand) => (
          <Brand key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
