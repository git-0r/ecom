import { useEffect, useState } from "react"
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
            <button className="btn btn-primary btn-viewall">view all</button>
        </>
    )
}

export default PopularCategory