import { Link } from "react-router-dom";

const CheckoutFailed = () => {
  return (
    <main>
      <h1 className="order-failed">
        Order Failed
        <ion-icon name="close-circle-outline" size="large"></ion-icon>
      </h1>
      <Link className="btn btn-primary" to="/">
        Continue shopping
      </Link>
    </main>
  );
};

export { CheckoutFailed };
