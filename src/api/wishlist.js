import { authHeader } from '../exports';
const axios = require('axios');

export const addToWishlistInDB = async (productId, user) => {
    await axios.put(
        `wishlist/addtowishlist/${user._id}`,
        { productId },
        authHeader(user?.accessToken));
}

export const removeFromWishlistInDB = async (productId, user) => {
    await axios.put(
        `wishlist/removefromwishlist/${user._id}`,
        { productId },
        authHeader(user?.accessToken));
}