import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api-calls";
import { useUser } from "../contexts/userContext";
import { useCart } from "../contexts/cartContext";
import { useWishlist } from "../contexts/wishlistContext";
import { useNotification } from "../contexts/notificationContext";
import Footer from "./Footer";


const LoginForm = () => {

    const [user, setUser] = useUser();
    const [cart, updateCart] = useCart();
    const [wishlist, updateWishlist] = useWishlist();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const { notificationHandler } = useNotification();


    const handleFormInput = (e) => {

        const inputFieldName = e.target.name;
        const inputFieldValue = e.target.value;

        switch (inputFieldName) {
            case "email":
                setEmail(inputFieldValue);
                break;
            case "password":
                setPassword(inputFieldValue);
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            const { cart, wishlist, ...user } = await login({ email, password });
            setUser({ type: "LOGIN", payload: user });
            cart && updateCart({ type: "SET_CART", payload: cart });
            wishlist && updateWishlist({ type: "SET_WISHLIST", payload: wishlist });
            navigate("/");

            notificationHandler("Login success!");

        } catch (error) {
            notificationHandler(error.message);
        }
    }

    return (
        <>
            <div className="d-flex flex-center">
                <form className="form" onSubmit={handleFormSubmit}>
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input form-input" id="email" name="email" type="email" placeholder="something@gmail.com" required onChange={handleFormInput} />
                    <p className="input-error-msg text-sm">enter email in 'email@gmail.com' format</p>
                    <label className="input-label" htmlFor="password">Password</label>
                    <input className="input form-input" id="password" name="password" type="password" placeholder="p@$$\/\/Or|)"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onChange={handleFormInput} />
                    <div className="input-error-msg text-sm">
                        <ul>password must include atleast:
                            <li>one uppercase letter</li>
                            <li>one lowercase letter</li>
                            <li>one special character</li>
                            <li>one number</li>
                            <li>minimum length 8 characters</li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label className="input-label" htmlFor="remember">Remember me</label>
                    </div>
                    <button className="btn btn-primary">Log in</button>
                    <div>
                        <Link className="react-router-link" to="/register">New customer? Create an account.</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default LoginForm;