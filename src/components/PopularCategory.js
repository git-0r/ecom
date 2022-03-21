import ProductCard from "./ProductCard"

const PopularCategory = ({ category, products }) => {

    return (
        <>
            <p className="large-heading">Popular {category} wine</p>
            <div className="product-list d-flex flex-justify-evenly flex-align-center">
                {
                    products
                        ? products
                            .slice(0, 4)
                            .map(
                                product => <ProductCard product={product} key={product.id} />
                            )
                        : <div className="product-text">Loading...</div>
                }
            </div>
            <button className="btn btn-primary btn-viewall">view all</button>
        </>
    )
}

export default PopularCategory