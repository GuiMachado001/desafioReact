import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Container, 
  Alert,
  CssBaseline
} from '@mui/material';
import { api } from '../services/api';
import { AxiosError } from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(''); 

    try {
      const response = await api.post('/login', { username, password });
      
      console.log("Resposta do servidor:", response.data);
      
      if (response.data && response.data.token) {
        // 1. Limpa qualquer lixo anterior e salva o novo token
        localStorage.removeItem('token');
        localStorage.setItem('token', response.data.token);
        
        // 2. Pequeno delay para garantir que o storage foi escrito
        // Isso evita que o ClientList dispare o GET antes do token estar pronto
        setTimeout(() => {
          navigate('/clientes');
        }, 100);
      } else {
        setError('Token não encontrado na resposta.');
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error("Erro no login:", error.response?.data || error.message);
      setError(error.response?.data?.message || 'Usuário ou senha inválidos.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 3, 
          padding: 4,
          borderRadius: 2, 
          bgcolor: 'background.paper'
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Login do Sistema
        </Typography>
        
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuário"
            name="username"
            autoComplete="username"
            autoFocus 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }} 
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;