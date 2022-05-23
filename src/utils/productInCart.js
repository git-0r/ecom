import { useState, useEffect } from "react";

const useCheckProductExists = (collection, product) => {
  const [productInCollection, setProductInCollection] = useState(false);

  useEffect(() => {
    const productIndex = collection?.findIndex(
      (productInCollection) => productInCollection._id === product?._id
    );
    setProductInCollection(productIndex === -1 ? false : true);
  }, [collection, product]);

  return productInCollection;
};

export { useCheckProductExists };
