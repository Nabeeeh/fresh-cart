// eslint-disable-next-line react/prop-types
const Order = ({ order = {} }) => {
  return (
    <div className="order rounded-1 border-start border-success border-5 mt-3 p-2">
      <h4 className="fw-bold">Order ID: {order?.id}</h4>
      <p>
        <strong>Order Date: </strong>
        {new Date(order?.createdAt).toLocaleString()}
      </p>

      <div className="d-flex align-items-center flex-wrap">
        {order?.cartItems?.map((product) => (
          <img
            key={product?._id}
            src={product?.product.imageCover}
            alt={product?.product.title}
            width="60px"
            className="rounded-2 px-1 mb-3"
          />
        ))}
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center px-2">
        <p>
          <strong>Total Order Price: </strong>
          {order?.totalOrderPrice} EGP
        </p>
        <p>
          <strong>Payment Method: </strong>
          {order?.paymentMethodType}
        </p>
      </div>

      <div className="px-2">
        <p>
          <strong>Shipping Address: </strong>
          {order?.shippingAddress.city},{order?.shippingAddress.details}
        </p>

        <p>
          <strong>Phone Number: </strong>
          {order?.shippingAddress.phone}
        </p>
      </div>
    </div>
  );
};

export default Order;
