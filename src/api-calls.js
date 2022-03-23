const BASE_URL = "https://ecom-srvr.herokuapp.com";


const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    return res.json();
}

const getProductsByCategory = async (category, limit) => {
    const res = await fetch(`${BASE_URL}/products/category/${category}/${limit}`);
    return res.json();
}

const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return res.json();
}

export { getProducts, getProductsByCategory, getProductById }