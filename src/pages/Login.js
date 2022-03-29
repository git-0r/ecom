import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Login = () => {

    return (
        <>
            <Navbar />
            <p className="large-heading">Login</p>
            <LoginForm />
        </>
    )
}

export default Login;