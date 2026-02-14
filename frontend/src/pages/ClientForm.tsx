import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { api } from '../services/api';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const ClientForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });


  useEffect(() => {
    const loadClientData = async () => {
      try {
        const response = await api.get<Client[]>('/clients');
        const client = response.data.find((c) => c.id === id);
        
        if (client) {
          setFormData({
            name: client.name,
            email: client.email,
            phone: client.phone,
            address: client.address
          });
        }
      } catch (error) {
        console.error('Erro ao carregar dados do cliente', error);
      }
    };

    if (id) {
      loadClientData();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/clients/${id}`, formData);
      } else {
        await api.post('/clients', formData);
      }
      navigate('/clientes'); 
    } catch (error) {
      console.error('Erro ao salvar cliente', error);
      alert('Erro ao salvar os dados. Verifique o console.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          {id ? 'Editar Cliente' : 'Novo Cliente'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth required margin="normal"
            label="Nome Completo" name="name"
            value={formData.name} onChange={handleChange}
          />
          <TextField
            fullWidth required margin="normal" type="email"
            label="E-mail" name="email"
            value={formData.email} onChange={handleChange}
          />
          <TextField
            fullWidth required margin="normal"
            label="Telefone" name="phone"
            value={formData.phone} onChange={handleChange}
          />
          <TextField
            fullWidth required margin="normal"
            label="Endereço" name="address"
            value={formData.address} onChange={handleChange}
          />

          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button variant="outlined" color="error" onClick={() => navigate('/clientes')}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Salvar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ClientForm;