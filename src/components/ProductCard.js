import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    return (
        <Link className="react-router-link" to={`/product/${product._id}`}>
            <div className="product-container d-flex flex-center">
                <div className="product-background">
                    <img
                        className="product-image"
                        src={product.image}
                        alt="product"
                    />
                </div>
            </div>
            <p className="product-text">{product.title}</p>
        </Link>
    )
}

export default ProductCard