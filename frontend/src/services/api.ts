import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    const tokenLimpo = token.replace(/"/g, '');
    config.headers.Authorization = `Bearer ${tokenLimpo}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});