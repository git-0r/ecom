import "./productListing.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../api/products";
import {
  Navbar,
  productFilter,
  useNotification,
  ProductListingCard,
} from "../../exports";

const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();
  const { notificationHandler } = useNotification();
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const products = await getProductsByCategory(category);
        setProducts(products);
      } catch (error) {
        notificationHandler(error.message);
      }
    })();
  }, [category, setProducts, notificationHandler]);

  const handleFilterChange = (e) => {
    const filterName = e.target.name;
    const filterValue = e.target.value;

    const isFilterAlreadyApplied = activeFilters.findIndex(
      (filter) => filter.filterName === filterName
    );

    // Add or remove filterValues from active filters
    // If filterValue is array which can contain multiple filter values
    if (filterName === "variety-filter" || filterName === "price-filter") {
      isFilterAlreadyApplied !== -1
        ? setActiveFilters((state) =>
            state.map((filter) =>
              filter.filterName !== filterName
                ? filter
                : {
                    ...filter,
                    filterValue: filter.filterValue.includes(filterValue)
                      ? filter.filterValue.filter(
                          (value) => value !== filterValue
                        )
                      : [...filter.filterValue, filterValue],
                  }
            )
          )
        : setActiveFilters((state) => [
            ...state,
            { filterName, filterValue: [filterValue] },
          ]);
    } else {
      // If filterValue is string
      isFilterAlreadyApplied !== -1
        ? setActiveFilters((state) =>
            state.map((filter) =>
              filter.filterName !== filterName
                ? filter
                : { ...filter, filterValue }
            )
          )
        : setActiveFilters((state) => [...state, { filterName, filterValue }]);
    }
  };

  useEffect(
    () => setFilteredProducts(productFilter(products, activeFilters)),
    [activeFilters, products]
  );
  const redVariety = [
    "Cabernet Sauvignon",
    "Merlot",
    "Zinfandel",
    "Syrah",
    "Malbec",
    "Pinot Noir",
  ];
  const whiteVariety = [
    "Chardonnay",
    "Sauvignon Blanc",
    "Moscato",
    "Pinot Grigio",
    "Riesling",
    "Viognier",
  ];

  return (
    <>
      <Navbar />
      <p className="large-heading">{category}</p>
      <main className="product-listing-container">
        <div>
          <div className="d-flex flex-justify-between flex-align-center">
            <p className="heading-lg">Filters</p>
            <button
              className="btn btn-link"
              onClick={() => setActiveFilters([])}
            >
              Clear all
            </button>
          </div>
          <div>
            {category === "red" ? (
              <details open>
                <summary className="text-xl">Variety</summary>
                <ul className="styled-list">
                  {redVariety?.map((variety) => (
                    <li key={variety}>
                      <input
                        type="checkbox"
                        onChange={handleFilterChange}
                        name="variety-filter"
                        value={variety}
                        id={variety}
                      />
                      <label htmlFor={variety} className="text-lg">
                        {variety}
                      </label>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <details open>
                <summary className="text-xl">Variety</summary>
                <ul className="styled-list">
                  {whiteVariety?.map((variety) => (
                    <li key={variety}>
                      <input
                        type="checkbox"
                        onChange={handleFilterChange}
                        name="variety-filter"
                        value={variety}
                        id={variety}
                      />
                      <label htmlFor={variety} className="text-lg">
                        {variety}
                      </label>
                    </li>
                  ))}
                </ul>
              </details>
            )}
            <details open>
              <summary className="text-xl">Price</summary>
              <ul className="styled-list">
                <li>
                  <input
                    type="checkbox"
                    onChange={handleFilterChange}
                    name="price-filter"
                    value="1000-2000"
                    id="1000-2000"
                  />
                  <label htmlFor="1000-2000" className="text-lg">
                    1000 - 2000
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={handleFilterChange}
                    name="price-filter"
                    value="2000-3000"
                    id="2000-3000"
                  />
                  <label htmlFor="2000-3000" className="text-lg">
                    2000 - 3000
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={handleFilterChange}
                    name="price-filter"
                    value="3000-4000"
                    id="3000-4000"
                  />
                  <label htmlFor="3000-4000" className="text-lg">
                    3000 - 4000
                  </label>
                </li>
              </ul>
            </details>
            <details open>
              <summary className="text-xl">Avg. customer review</summary>
              <ul className="styled-list">
                <li>
                  <input
                    type="radio"
                    onChange={handleFilterChange}
                    name="rating-filter"
                    value={4}
                    id="4"
                  />
                  <label htmlFor="4" className="text-lg">
                    &#9733; &#9733; &#9733; &#9733; &#9734; 4 & up
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={handleFilterChange}
                    name="rating-filter"
                    value={3}
                    id="3"
                  />
                  <label htmlFor="3" className="text-lg">
                    &#9733; &#9733; &#9733; &#9734; &#9734; 3 & up
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={handleFilterChange}
                    name="rating-filter"
                    value={2}
                    id="2"
                  />
                  <label htmlFor="2" className="text-lg">
                    &#9733; &#9733; &#9734; &#9734; &#9734; 2 & up
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={handleFilterChange}
                    name="rating-filter"
                    value={1}
                    id="1"
                  />
                  <label htmlFor="1" className="text-lg">
                    &#9733; &#9734; &#9734; &#9734; &#9734; 1 & up
                  </label>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="products-list d-flex flex-justify-evenly">
          {filteredProducts
            ? filteredProducts?.map((product) => (
                <ProductListingCard product={product} key={product._id} />
              ))
            : products?.map((product) => (
                <ProductListingCard product={product} key={product._id} />
              ))}
        </div>
      </main>
    </>
  );
};

export { ProductListing };
