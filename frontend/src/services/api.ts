import axios from 'axios';

export const api = axios.create({
  // Quando estiver pronto, aqui vai o link do Render (ex: https://meu-projeto.onrender.com)
  baseURL: 'http://localhost:3000', 
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