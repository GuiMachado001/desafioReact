import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Box, IconButton, Tooltip,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle 
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
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
  const [open, setOpen] = useState(false); // Estado do Modal
  const [selectedId, setSelectedId] = useState<string | null>(null); // ID do cliente para deletar
  
  const navigate = useNavigate();

  // Abre o modal de confirmação
  const handleOpenDelete = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  // Fecha o modal
  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Função de exclusão real
  const confirmDelete = async () => {
    if (!selectedId) return;

    try {
      await api.delete(`/clients/${selectedId}`);
      setClients(clients.filter(client => client.id !== selectedId));
      handleClose();
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      alert('Não foi possível excluir o cliente.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { navigate('/login'); return; }

    const fetchClients = async () => {
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };
    fetchClients();
  }, [navigate]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Cabeçalho */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Clientes
        </Typography>
        <Tooltip title="Sair do sistema">
          <IconButton color="error" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Ações */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button 
          variant="outlined" color="secondary" 
          onClick={() => generateClientPDF(clients)}
          sx={{ mr: 2, borderRadius: 2 }}
        >
          Gerar PDF
        </Button>
        <Button 
          variant="contained" color="primary" 
          onClick={() => navigate('/clientes/novo')}
          sx={{ borderRadius: 2 }}
        >
          Novo Cliente
        </Button>
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f0f4f8' }}>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>E-mail</strong></TableCell>
              <TableCell><strong>Telefone</strong></TableCell>
              <TableCell align="center"><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <TableRow key={client.id} hover>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center" gap={1}>
                      <Tooltip title="Editar">
                        <IconButton color="primary" onClick={() => navigate(`/clientes/editar/${client.id}`)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir">
                        <IconButton color="error" onClick={() => handleOpenDelete(client.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 3 }}>
                  <Typography color="textSecondary">Nenhum cliente cadastrado.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* DIALOG DE CONFIRMAÇÃO (O TOQUE PROFISSIONAL) */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
          {"Confirmar Exclusão"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja remover este cliente? Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, px: 3 }}>
          <Button onClick={handleClose} variant="outlined" color="primary" sx={{ borderRadius: 2 }}>
            Cancelar
          </Button>
          <Button onClick={confirmDelete} variant="contained" color="error" autoFocus sx={{ borderRadius: 2 }}>
            Excluir permanentemente
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ClientList;