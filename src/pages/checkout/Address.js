import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart, useUser } from "../../exports";
import "./checkout.css";
import { payment } from "../../api/payment";
const Address = () => {
  const { cart, updateCart } = useCart();
  const user = useUser()?.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.products.length < 1) navigate("/cart");
  });

  const continueToPayment = async (e) => {
    e.preventDefault();
    const paymentUrl = await payment(user, cart);
    updateCart({ type: "CLEAR" });
    window.location.href = paymentUrl;
  };

  return (
    <main className="d-flex flex-center">
      <form
        className="address-form d-flex flex-dir-column gap-1"
        onSubmit={continueToPayment}
      >
        <h1 className="text-align-center">Add payment address</h1>
        <div className="d-flex gap-1">
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              className="input"
              id="firstname"
              name="firstname"
              minLength={3}
              type="text"
              required
              placeholder="First name"
              defaultValue="Donna"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              className="input"
              placeholder="Last name"
              id="lastname"
              name="lastname"
              minLength="3"
              type="text"
              required
              defaultValue="Martinez"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            className="input"
            placeholder="Enter your address"
            id="address"
            name="address"
            type="text"
            required
            minLength="3"
            defaultValue="2098 Juniper Drive"
          />
        </div>
        <div className="d-flex gap-1">
          <div>
            <label htmlFor="city">City</label>
            <input
              className="input"
              placeholder="City"
              id="city"
              name="city"
              type="text"
              required
              minLength="3"
              defaultValue="New Delhi"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              className="input"
              placeholder="state"
              id="state"
              name="state"
              type="text"
              required
              minLength="3"
              defaultValue="Delhi"
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              className="input"
              placeholder="Phone number"
              id="phone"
              name="phone"
              type="tel"
              required
              minLength="10"
              defaultValue="9974448598"
            />
          </div>
          <div>
            <label htmlFor="pincode">Pin code</label>
            <input
              className="input"
              placeholder="Pin code"
              id="pincode"
              name="pincode"
              type="number"
              required
              minLength="6"
              defaultValue="110011"
            />
          </div>
        </div>
        <button className="btn btn-primary btn-payment">Pay</button>
      </form>
    </main>
  );
};

export { Address };
