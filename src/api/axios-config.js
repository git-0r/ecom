const axios = require('axios');

axios.defaults.baseURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3003"
    : "https://ecom-srvr.herokuapp.com";