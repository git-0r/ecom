import { authHeader } from "../exports";
const axios = require("axios");

export const addToCart = async (product, user) => {
  await axios.put(
    `cart/addtocart/${user._id}`,
    product,
    authHeader(user?.accessToken)
  );
};

export const updateCartInDB = async (action, user) => {
  await axios.put(
    `cart/updatecart/${user._id}`,
    action,
    authHeader(user?.accessToken)
  );
};

export const removeFromCartInDB = async (product, user) => {
  await axios.put(
    `cart/removefromcart/${user._id}`,
    product,
    authHeader(user?.accessToken)
  );
};
