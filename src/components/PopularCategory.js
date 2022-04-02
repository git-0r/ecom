import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProductsByCategory } from "../api-calls"
import ProductCard from "./ProductCard"

const PopularCategory = ({ category, limit }) => {

    const [products, setProducts] = useState()

    useEffect(() => {
        (async () => {
            const data = await getProductsByCategory(category, limit);
            setProducts(data);
        })()
    }, [category, limit])

    return (
        <>
            <p className="large-heading">Popular {category} wine</p>
            <div className="product-list d-flex flex-justify-evenly flex-align-center">
                {
                    products
                        ? products
                            .map(
                                product => <ProductCard product={product} key={product._id} />
                            )
                        : <div className="product-text">Loading...</div>
                }
            </div>
            <Link to={`/products/${category}`} className="btn btn-primary btn-viewall">view all</Link>
        </>
    )
}

export default PopularCategory