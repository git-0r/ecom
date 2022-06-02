import { Link } from "react-router-dom";
import "./checkout.css";

const CheckoutSuccess = () => {
  return (
    <main className="d-flex flex-center order-details">
      <div>
        <h1 className="order-success">
          Order Successful
          <ion-icon name="checkmark-circle-outline" size="large"></ion-icon>
        </h1>
        <Link className="btn btn-primary" to="/">
          Continue shopping
        </Link>
      </div>
    </main>
  );
};

export { CheckoutSuccess };
