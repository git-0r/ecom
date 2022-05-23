import { register } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useUser, Footer, useNotification } from "../../exports";
import { useState } from "react";

const RegistrationForm = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { notificationHandler } = useNotification();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target?.name?.value;
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;

    try {
      const user = await register({ name, email, password });
      setUser({ type: "REGISTER", payload: user });
      notificationHandler("Registration success.");
      navigate("/");
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-center">
        <form className="form" onSubmit={handleFormSubmit}>
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            className="input form-input"
            id="name"
            name="name"
            type="text"
            minLength="3"
            placeholder="name"
            required
          />
          <p className="input-error-msg text-sm">min length is 3</p>
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
            type={passwordVisible ? "password" : "text"}
            placeholder="p@$$\/\/Or|)"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
          <button onClick={() => setPasswordVisible((state) => !state)}>
            toggle password
          </button>
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
          <button className="btn btn-primary">Register</button>
          <div>
            <Link className="react-router-link" to="/login">
              Existing User? Log in
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export { RegistrationForm };
