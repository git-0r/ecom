import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { ProductCard } from "../../exports";

import { getProductsByCategory } from "../../api/products";

const PopularCategory = ({ category, limit }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      const data = await getProductsByCategory(category, limit);
      setProducts(data);
    })();
  }, [category, limit]);

  return (
    <>
      <p id="popular-products-scroll" className="large-heading">
        Popular {category} wine
      </p>
      <div className="product-list d-flex flex-justify-evenly flex-align-center">
        {products ? (
          products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <div className="product-text">Loading...</div>
        )}
      </div>
      <Link
        to={`/products/${category}`}
        className="btn btn-primary btn-viewall"
      >
        view all
      </Link>
    </>
  );
};

export { PopularCategory };
