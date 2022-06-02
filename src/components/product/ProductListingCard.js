import { ProductCard, AddToCartButton } from "../../exports";

import { AddToWishlistButton } from "../wishlist/AddToWishlistButton";

const ProductListingCard = ({ product }) => {
  return (
    <div>
      <ProductCard product={product} />
      <div>
        <p className="product-price text-align-center">
          &#x20B9; {product.price}
        </p>
        <div className="d-flex flex-center">
          <AddToWishlistButton product={product} />
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export { ProductListingCard };
