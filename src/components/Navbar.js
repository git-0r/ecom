import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const Navbar = () => {

    const [cart] = useCart();

    return (
        <nav className="top-navigation d-flex flex-justify-evenly flex-align-center">
            <Link className="react-router-link" to="/">
                <div className="left logo d-flex flex-justify-evenly">
                    <ion-icon name="beer-outline"></ion-icon>
                    wine & spirits
                </div>
            </Link>
            <ul className="center d-flex flex-justify-evenly">
                <li className="d-flex flex-justify-evenly flex-align-center">Shop
                    <ion-icon name="caret-down-outline"></ion-icon>
                </li>
                <li className="d-flex flex-justify-evenly flex-align-center">Our wines
                    <ion-icon name="caret-down-outline"></ion-icon>
                </li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
            <div className="right d-flex flex-justify-evenly">
                <div className="badge">
                    <div className="badge-icon">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <span className="badge-md badge-primary">0</span>
                </div>
                <Link className="react-router-link" to="/cart">
                    <div className="badge">
                        <div className="badge-icon">
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                        <span className="badge-md badge-primary">{cart.products?.length}</span>
                    </div>
                </Link>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </nav>
    )
}

export default Navbar