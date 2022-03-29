import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../api-calls";
import { useCart } from "../contexts/cartContext";
import { useUser } from "../contexts/userContext";

const AddToCartButton = ({ product }) => {

    const [cart, updateCart] = useCart();
    const [productIncart, setProductInCart] = useState(false);
    const [user] = useUser();


    const handleCart = async () => {

        if (user) {
            await addToCart(product, user);
        }

        updateCart({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    }

    useEffect(() => {

        const productIndex = cart.products?.findIndex(productIncart => productIncart._id === product?._id);

        productIndex === -1
            ? setProductInCart(false)
            : setProductInCart(true);

    }, [cart, product])

    return (
        productIncart
            ? <Link className="btn btn-primary" to="/cart">GO TO CART</Link>
            : <button className="btn btn-primary" onClick={handleCart}>ADD TO CART</button>
    )
}

export default AddToCartButton