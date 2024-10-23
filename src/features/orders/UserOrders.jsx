import { useUserOrders } from "./useUserOrders";

import Order from "./Order";
import { TailSpin } from "react-loader-spinner";

const UserOrders = () => {
  const { userOrders, isLoadingUserOrders } = useUserOrders();

  return (
    <div>
      <h2 className="fw-bold py-3">My Orders</h2>

      {isLoadingUserOrders && (
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

      {userOrders?.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
};

export default UserOrders;
