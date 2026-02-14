import axios from 'axios';

export const api = axios.create({
  // URL do backend no Render
  baseURL: 'https://desafio-react-backend-azak.onrender.com', 
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