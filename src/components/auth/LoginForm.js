import { login } from "../../api/auth";

import { Link, useNavigate } from "react-router-dom";

import {
  Footer,
  useUser,
  useCart,
  useWishlist,
  useNotification,
} from "../../exports";

const LoginForm = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { updateCart } = useCart();
  const { updateWishlist } = useWishlist();
  const { notificationHandler } = useNotification();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const target = e.target.name;
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    const guestLoginData = { email: "test@email.com", password: "Test@123" };

    try {
      const { cart, wishlist, ...user } = await login(
        target === "guest-login-button" ? guestLoginData : { email, password }
      );

      setUser({ type: "LOGIN", payload: user });
      cart && updateCart({ type: "SET_CART", payload: cart });
      wishlist && updateWishlist({ type: "SET_WISHLIST", payload: wishlist });
      navigate("/");
      notificationHandler("Login success");
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-center flex-dir-column">
        <form className="form" onSubmit={handleFormSubmit}>
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input form-input"
            id="email"
            name="email"
            type="email"
            placeholder="something@gmail.com"
            required
          />
          <p className="input-error-msg text-sm">
            enter email in 'email@gmail.com' format
          </p>
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input form-input"
            id="password"
            name="password"
            type="password"
            placeholder="p@$$\/\/Or|)"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
          <div className="input-error-msg text-sm">
            <ul>
              password must include atleast:
              <li>one uppercase letter</li>
              <li>one lowercase letter</li>
              <li>one special character</li>
              <li>one number</li>
              <li>minimum length 8 characters</li>
            </ul>
          </div>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label className="input-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary">Log in</button>
          <div>
            <Link className="react-router-link" to="/register">
              New customer? Create an account.
            </Link>
          </div>
        </form>
        <button
          className="btn btn-link"
          onClick={handleFormSubmit}
          name="guest-login-button"
        >
          Guest Log in
        </button>
      </div>
      <Footer />
    </>
  );
};

export { LoginForm };
