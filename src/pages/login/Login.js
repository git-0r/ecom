import "./login.css";

import { Navbar, LoginForm } from "../../exports";

const Login = () => {
  return (
    <>
      <Navbar />
      <p className="large-heading">Login</p>
      <LoginForm />
    </>
  );
};

export { Login };
