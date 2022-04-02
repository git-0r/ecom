const axios = require('axios');

const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3003"
    : "https://ecom-srvr.herokuapp.com";


const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
}

const getProductsByCategory = async (category, limit) => {
    const res = await axios.get(`${BASE_URL}/products/category/${category}/${limit}`);
    return res.data;
}

const getProductById = async (id) => {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
}

const login = async (userData) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, userData);
    const user = res.data;

    localStorage.setItem("user", JSON.stringify(user));

    return user;
}

const register = async (userData) => {
    const res = await axios.post(`${BASE_URL}/auth/register`, userData);
    const user = res.data;

    localStorage.setItem("user", JSON.stringify(user));

    return user;
}

const addToCart = async (product, user) => {
    await axios.put(
        `${BASE_URL}/cart/addtocart/${user._id}`,
        product,
        {
            headers: { token: `Bearer ${user.accessToken}` }
        });
}

const updateCartInDB = async (action, user) => {
    await axios.put(
        `${BASE_URL}/cart/updatecart/${user._id}`,
        action,
        {
            headers: { token: `Bearer ${user.accessToken}` }
        });
}

const removeFromCartInDB = async (product, user) => {
    await axios.put(
        `${BASE_URL}/cart/removefromcart/${user._id}`,
        product,
        {
            headers: { token: `Bearer ${user.accessToken}` }
        });
}

const addToWishlistInDB = async (productId, user) => {
    await axios.put(
        `${BASE_URL}/wishlist/addtowishlist/${user._id}`,
        { productId },
        {
            headers: { token: `Bearer ${user.accessToken}` }
        });
}

const removeFromWishlistInDB = async (productId, user) => {
    await axios.put(
        `${BASE_URL}/wishlist/removefromwishlist/${user._id}`,
        { productId },
        {
            headers: { token: `Bearer ${user.accessToken}` }
        });
}

export {
    getProducts,
    getProductsByCategory,
    getProductById,
    login,
    register,
    addToCart,
    updateCartInDB,
    removeFromCartInDB,
    addToWishlistInDB,
    removeFromWishlistInDB
}