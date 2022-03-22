import { useState, useEffect } from "react";
import { useCart } from "../contexts/cartContext";

const AddToCartButton = ({ product }) => {

    const [cart, updateCart] = useCart();
    const [productIncart, setProductInCart] = useState(false);


    const handleCart = () => {
        updateCart({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } })
    }

    useEffect(() => {
        const i = cart.findIndex(productIncart => productIncart._id === product?._id);
        i === -1 ? setProductInCart(false) : setProductInCart(true);
    }, [cart, product])

    return (
        productIncart
            ? <button className="btn btn-primary">GO TO CART</button>
            : <button className="btn btn-primary" onClick={handleCart}>ADD TO CART</button>
    )
}

export default AddToCartButton