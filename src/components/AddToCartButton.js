import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const AddToCartButton = ({ product }) => {

    const [cart, updateCart] = useCart();
    const [productIncart, setProductInCart] = useState(false);


    const handleCart = () => {
        updateCart({ type: "INCREASE_IN_CART", payload: { ...product, quantity: 1 } })
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