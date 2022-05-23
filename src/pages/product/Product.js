import "./product.css";

import { useParams } from "react-router-dom";

import { getProductById } from "../../api/products";

import { useState, useEffect } from "react";

import {
  Navbar,
  Footer,
  AddToCartButton,
  AddToWishlistButton,
} from "../../exports";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      setProduct(data);
    })();
  }, [id]);

  return (
    <>
      <Navbar />
      <main>
        <p className="large-heading">{product?.title}</p>
        <section className="product-section grid-col-2">
          <div className="product-section-left d-flex flex-justify-center">
            <img
              className="product-section-image"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <div className="product-section-right">
            <div>{product?.desc}</div>
            <div>
              <AddToCartButton product={product} />
            </div>
            <div>
              <AddToWishlistButton product={product} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export { Product };
