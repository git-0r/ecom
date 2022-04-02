import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProductsByCategory } from "../api-calls";
import { useNotification } from "../contexts/notificationContext";
import ProductListingcard from "../components/ProductListingCard";
import { filter } from "../utils/productFilter";

const ProductListing = () => {

    const { category } = useParams();
    const { notificationHandler } = useNotification();
    const [products, setProducts] = useState();
    const [activeFilters, setActiveFilters] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {

        (async () => {

            try {
                const products = await getProductsByCategory(category);
                setProducts(products);
            }
            catch (error) {

                notificationHandler(error.message);
            }
        })()

    }, [category, setProducts, notificationHandler])

    const handleFilterChange = (e) => {

        const filterName = e.target.name;
        const filterValue = e.target.value;

        const isFilterAlreadyApplied = activeFilters.findIndex(filter => filter.filterName === filterName);

        // Add or remove filterValues from active filters
        // If filterValue is array which can contain multiple filter values
        if (filterName === "variety-filter" || filterName === "price-filter") {

            isFilterAlreadyApplied !== -1
                ? setActiveFilters(
                    state => state.map(
                        filter => filter.filterName !== filterName
                            ? filter
                            : {
                                ...filter, filterValue: filter.filterValue.includes(filterValue)
                                    ? filter.filterValue.filter(value => value !== filterValue)
                                    : [...filter.filterValue, filterValue]
                            }))
                : setActiveFilters(state => [...state, { filterName, filterValue: [filterValue] }])
        }
        else {
            // If filterValue is string
            isFilterAlreadyApplied !== -1
                ? setActiveFilters(
                    state => state.map(
                        filter => filter.filterName !== filterName
                            ? filter
                            : { ...filter, filterValue }))
                : setActiveFilters(
                    state => [...state, { filterName, filterValue }])
        }
    }

    useEffect(() => setFilteredProducts(filter(products, activeFilters)), [activeFilters, products])

    return (
        <>
            <Navbar />
            <p className="large-heading">{category}</p>
            <main className="product-listing-container">
                <div>
                    <p className="heading-lg">Filters</p>
                    <div>
                        {
                            category === "red"
                                ? <details open>
                                    <summary className="text-xl">Variety</summary>
                                    <ul className="styled-list">
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Cabernet Sauvignon" id="Cabernet Sauvignon" />
                                            <label htmlFor="Cabernet Sauvignon" className="text-lg">Cabernet Sauvignon</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Merlot" id="Merlot" />
                                            <label htmlFor="Merlot" className="text-lg">Merlot</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Zinfandel" id="Zinfandel" />
                                            <label htmlFor="Zinfandel" className="text-lg">Zinfandel</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Syrah" id="Syrah" />
                                            <label htmlFor="Syrah" className="text-lg">Syrah</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Malbec" id="Malbec" />
                                            <label htmlFor="Malbec" className="text-lg">Malbec</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Pinot Noir" id="Pinot Noir" />
                                            <label htmlFor="Pinot Noir" className="text-lg">Pinot Noir</label>
                                        </li>
                                    </ul>
                                </details>
                                : <details open>
                                    <summary className="text-xl">Variety</summary>
                                    <ul className="styled-list">
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Chardonnay" id="Chardonnay" />
                                            <label htmlFor="Chardonnay" className="text-lg">Chardonnay</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Sauvignon Blanc" id="Sauvignon Blanc" />
                                            <label htmlFor="Sauvignon Blanc" className="text-lg">Sauvignon Blanc</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Moscato" id="Moscato" />
                                            <label htmlFor="Moscato" className="text-lg">Moscato</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Pinot Grigio" id="Pinot Grigio" />
                                            <label htmlFor="Pinot Grigio" className="text-lg">Pinot Grigio</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Riesling" id="Riesling" />
                                            <label htmlFor="Riesling" className="text-lg">Riesling</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" onChange={handleFilterChange} name="variety-filter" value="Viognier" id="Viognier" />
                                            <label htmlFor="Viognier" className="text-lg">Viognier</label>
                                        </li>
                                    </ul>
                                </details>
                        }
                        <details open>
                            <summary className="text-xl">Price</summary>
                            <ul className="styled-list">
                                <li>
                                    <input type="checkbox" onChange={handleFilterChange} name="price-filter" value="1000-2000" id="1000-2000" />
                                    <label htmlFor="1000-2000" className="text-lg">1000 - 2000</label>
                                </li>
                                <li>
                                    <input type="checkbox" onChange={handleFilterChange} name="price-filter" value="2000-3000" id="2000-3000" />
                                    <label htmlFor="2000-3000" className="text-lg">2000 - 3000</label>
                                </li>
                                <li>
                                    <input type="checkbox" onChange={handleFilterChange} name="price-filter" value="3000-4000" id="3000-4000" />
                                    <label htmlFor="3000-4000" className="text-lg">3000 - 4000</label>
                                </li>
                            </ul>
                        </details>
                        <details open>
                            <summary className="text-xl">Avg. customer review</summary>
                            <ul className="styled-list">
                                <li>
                                    <input type="radio" onChange={handleFilterChange} name="rating-filter" value={4} id="4" />
                                    <label htmlFor="4" className="text-lg">&#9733; &#9733; &#9733; &#9733; &#9734; 4 & up</label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleFilterChange} name="rating-filter" value={3} id="3" />
                                    <label htmlFor="3" className="text-lg">&#9733; &#9733; &#9733; &#9734; &#9734; 3 & up</label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleFilterChange} name="rating-filter" value={2} id="2" />
                                    <label htmlFor="2" className="text-lg">&#9733; &#9733; &#9734; &#9734; &#9734; 2 & up</label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleFilterChange} name="rating-filter" value={1} id="1" />
                                    <label htmlFor="1" className="text-lg">&#9733; &#9734; &#9734; &#9734; &#9734; 1 & up</label>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="products-list d-flex flex-justify-evenly">
                    {
                        filteredProducts
                            ? filteredProducts?.map(product => <ProductListingcard product={product} key={product._id} />)
                            : products?.map(product => <ProductListingcard product={product} key={product._id} />)
                    }
                </div>
            </main>
        </>
    )
}

export default ProductListing;