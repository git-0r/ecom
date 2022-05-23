const axios = require('axios');

export const searchFor = async (query) => {
    const res = await axios.get(`search/${query}`);
    return res.data;
}