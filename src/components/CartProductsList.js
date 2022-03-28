import ProductCard from "../components/ProductCard";
import { useCart } from "../contexts/cartContext";


const CartProductsList = () => {
    const [cart, updateCart] = useCart();

    const modifyCart = (action) => {
        updateCart(action);
    };

    return (
        <section className="section-products">
            {cart.products?.map((product) => (
                <div
                    className="cart-product-container d-flex flex-align-center"
                    key={product._id}
                >
                    <div className="cart-product-card d-flex flex-center">
                        <ProductCard product={product} />
                    </div>
                    <div className="cart-product-quantity d-flex flex-center">
                        <button
                            className="btn-modify-quantity"
                            onClick={() =>
                                modifyCart({ type: "INCREASE_IN_CART", payload: product })
                            }
                        >
                            +
                        </button>
                        <p className="heading-lg">{product.quantity}</p>
                        <button
                            className="btn-modify-quantity"
                            onClick={() =>
                                modifyCart({ type: "DECREASE_IN_CART", payload: product })
                            }
                            disabled={product.quantity < 2}
                        >
                            -
                        </button>
                    </div>
                    <div className="cart-product-price d-flex flex-center">
                        <p className="heading-lg">
                            &#8377; {product.quantity * product.price}
                        </p>
                        <button
                            className="text-md btn btn-link"
                            onClick={() =>
                                modifyCart({ type: "REMOVE_FROM_CART", payload: product })
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CartProductsList;