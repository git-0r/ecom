const ProductCard = ({ product }) => {
    return (
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
    )
}

export default ProductCard