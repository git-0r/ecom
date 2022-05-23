const axios = require('axios');

export const login = async (userData) => {
    const res = await axios.post(`auth/login`, userData);
    const user = res.data;

    localStorage.setItem("user", JSON.stringify(user));

    return user;
}

export const register = async (userData) => {
    const res = await axios.post(`auth/register`, userData);
    const user = res.data;

    localStorage.setItem("user", JSON.stringify(user));

    return user;
}