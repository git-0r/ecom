// const BASE_URL = "http://localhost:3001";
// Fake server for deployment
const BASE_URL = "https://my-json-server.typicode.com/git-0r/fake-server"


const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    return res.json();
}

export { getProducts }