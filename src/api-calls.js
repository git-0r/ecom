const axios = require('axios');

const BASE_URL = "https://ecom-srvr.herokuapp.com";


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

export { getProducts, getProductsByCategory, getProductById }