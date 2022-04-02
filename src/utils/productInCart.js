import { useState } from "react";

const useCheckProductIncart = (cart, product) => {

    const [productIncart, setProductInCart] = useState(false);

    const productIndex = cart.products?.findIndex(productIncart => productIncart._id === product?._id);

    productIndex === -1
        ? setProductInCart(false)
        : setProductInCart(true);

    return { productIncart }
}

export { useCheckProductIncart }