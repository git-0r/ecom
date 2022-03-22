import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <div className="product-container">
                <div className="product-background">
                    <img
                        className="product-image"
                        src={product.image}
                        alt="product"
                    />
                </div>
                <p className="product-text">{product.title}</p>
            </div>
        </Link>
    )
}

export default ProductCard