import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../api-calls";
import { useCart } from "../contexts/cartContext";
import { useNotification } from "../contexts/notificationContext";
import { useUser } from "../contexts/userContext";

const AddToCartButton = ({ product }) => {

    const [cart, updateCart] = useCart();
    const [productIncart, setProductInCart] = useState(false);
    const [user] = useUser();
    const { notificationHandler } = useNotification();



    const handleCart = async () => {

        if (user) {

            try {
                await addToCart(product, user);

                updateCart({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });

                notificationHandler("Added to cart");

            } catch (error) {

                notificationHandler(error.message);
            }
        }
        else {

            updateCart({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });

            notificationHandler("Added to cart");
        }

    }

    useEffect(() => {

        const productIndex = cart.products?.findIndex(productIncart => productIncart._id === product?._id);

        productIndex === -1
            ? setProductInCart(false)
            : setProductInCart(true);

    }, [cart, product])

    return (
        productIncart
            ? <Link className="btn btn-link" to="/cart">Go to cart</Link>
            : <button className="btn btn-primary" onClick={handleCart}>Add to cart</button>
    )
}

export default AddToCartButton