import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Box 
} from '@mui/material';
import { api } from '../services/api';
import { generateClientPDF } from '../utils/generatePDF'; 

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Definimos a função assíncrona dentro do Effect
    const fetchClients = async () => {
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        navigate('/login');
      }
    };

    fetchClients();
  }, [navigate]); // Agora apenas 'navigate' é uma dependência

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Clientes Cadastrados</Typography>
        <Box>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={() => generateClientPDF(clients)}
            sx={{ mr: 2 }}
          >
            Gerar PDF
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/clientes/novo')}
          >
            Novo Cliente
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>E-mail</strong></TableCell>
              <TableCell><strong>Telefone</strong></TableCell>
              <TableCell align="center"><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} hover>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell align="center">
                  <Button 
                    size="small" 
                    variant="text" 
                    onClick={() => navigate(`/clientes/editar/${client.id}`)}
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {clients.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Nenhum cliente cadastrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ClientList;