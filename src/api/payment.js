import { authHeader } from "../exports";
const axios = require("axios");

export const payment = async (user, cart) => {
  const { data } = await axios.post(
    `checkout/${user?._id}`,
    { products: cart?.products },
    {
      ...authHeader(user?.accessToken),
    }
  );
  return data.url;
};
