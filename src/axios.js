import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
//instance.defaults.headers= 'Access-Control-Allow-Origin": "*"'
// instance.interceptors.request...

export default instance;