import axios from "axios";
import { authHeader, useCart, useUser } from "../../exports";
import "./checkout.css";
const Address = () => {
  const { cart } = useCart();
  const { _id, accessToken } = useUser()?.user;

  const continueToPayment = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const { data } = await axios.post(
      `http://localhost:3003/checkout/${_id}`,
      { products: cart.products },
      {
        ...authHeader(accessToken),
        "Content-Type": "text/plain",
      }
    );
    window.location.href = data?.url;
  };

  return (
    <main>
      <h1>Add payment address</h1>
      <form
        className="address-form d-flex flex-dir-column gap-1"
        onSubmit={continueToPayment}
      >
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
            />
          </div>
        </div>
        <button className="btn btn-primary btn-payment">Pay</button>
      </form>
    </main>
  );
};

export { Address };
