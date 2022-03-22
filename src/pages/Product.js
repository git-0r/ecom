import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProductById } from "../api-calls";
import { useState, useEffect } from "react";
import AddToCartButton from "../components/AddToCartButton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
