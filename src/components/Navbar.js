import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useUser } from "../contexts/userContext";
import { useWishlist } from "../contexts/wishlistContext";

const Navbar = () => {

    const [cart, updateCart] = useCart();
    const [user, setUser] = useUser();
    const [wishlist, updateWishlist] = useWishlist();

    const logout = () => {
        localStorage.clear();
        updateCart({ type: "LOGOUT" });
        updateWishlist({ type: "LOGOUT" });
        setUser({ type: "LOGOUT" });
    }

    return (
        <nav className="top-navigation d-flex flex-justify-evenly flex-align-center">
            <Link className="react-router-link" to="/">
                <div className="left logo d-flex flex-center">
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
            <div className="right d-flex flex-justify-evenly flex-align-center">
                <div>
                    {
                        user
                            ? <button className="btn btn-secondary" onClick={logout}>Logout</button>
                            : <Link to="/login" className="react-router-link btn btn-primary">Login</Link>
                    }
                </div>
                <Link className="react-router-link" to="/wishlist">
                    <div className="badge">
                        <div className="badge-icon">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <span className="badge-md badge-primary">{wishlist?.products?.length}</span>
                    </div>
                </Link>
                <Link className="react-router-link" to="/cart">
                    <div className="badge">
                        <div className="badge-icon">
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                        <span className="badge-md badge-primary">{cart.products?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar