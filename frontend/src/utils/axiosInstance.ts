import axios from "axios";

export const _axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    headers: {
        'Content-Type': 'application/json',
    }
})


_axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('delan-token');
    if (token) {
        config = { ...config, headers: { Authorization: `Bearer ${token}` } };
    }
    return config;
})

_axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
})