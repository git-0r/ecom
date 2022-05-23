const axios = require('axios');

export const getProducts = async () => {
    const res = await axios.get(`products`);
    return res.data;
}

export const getProductsByCategory = async (category, limit) => {
    const res = await axios.get(`products/category/${category}/${limit}`);
    return res.data;
}

export const getProductById = async (id) => {
    const res = await axios.get(`products/${id}`);
    return res.data;
}