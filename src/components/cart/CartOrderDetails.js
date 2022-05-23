import { Link } from "react-router-dom";

const CartOrderDetails = ({ cart }) => {
  return (
    cart.products?.length > 0 && (
      <section className="section-total">
        <p className="heading-md">Order Details</p>
        <div className="d-flex flex-justify-between text-lg">
          <p>Total</p>
          <p>&#8377; {cart.total}</p>
        </div>
        <div className="d-flex flex-justify-between text-lg">
          <p>Discount</p>
          <p>&#8377; {0}</p>
        </div>
        <div className="d-flex flex-justify-between text-lg">
          <p>Delivery</p>
          <p>FREE</p>
        </div>
        <div className="d-flex flex-justify-between text-lg">
          <p>Total Amount</p>
          <p>&#8377; {cart.total}</p>
        </div>
        <Link to="/cart/address" className="btn btn-primary btn-shipping">
          PROCEED TO SHIPPING
        </Link>
      </section>
    )
  );
};

export { CartOrderDetails };
