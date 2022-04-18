import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/userContext";
import { register } from "../api-calls";
import Footer from "./Footer";

const RegisterationForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useUser();
    const navigate = useNavigate();


    const handleFormInput = (e) => {

        const inputFieldName = e.target.name;
        const inputFieldValue = e.target.value;

        switch (inputFieldName) {
            case "name":
                setName(inputFieldValue);
                break;
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

        const user = await register({ name, email, password });
        setUser({ type: "REGISTER", payload: user });

        navigate("/");
    }

    return (
        <>
            <div className="d-flex flex-center">
                <form className="form" onSubmit={handleFormSubmit}>
                    <label className="input-label" htmlFor="name">Name</label>
                    <input className="input form-input" id="name" name="name" type="text" minLength="3" placeholder="name" required onChange={handleFormInput} />
                    <p className="input-error-msg text-sm">min length is 3</p>
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
                    <button className="btn btn-primary">Register</button>
                    <div>
                        <Link className="react-router-link" to="/login">Existing User? Log in</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default RegisterationForm;