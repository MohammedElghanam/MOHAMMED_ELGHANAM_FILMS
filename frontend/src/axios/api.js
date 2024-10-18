// src/axios/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/user'
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        if (config.needsAuth && token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
