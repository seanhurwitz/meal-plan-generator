const axios = require('axios');

const myAxiosInstance = axios.create({
  baseURL: 'https://meal-generator-257ee.firebaseio.com/',
});

module.exports = myAxiosInstance;
