import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientList from './pages/ClientList';
import ClientForm from './pages/ClientForm';

// Este é o componente principal. 
// O BrowserRouter deve ser o "pai" de todos os outros.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota inicial: manda para o Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        
        {/* Rotas de Clientes */}
        <Route path="/clientes" element={<ClientList />} />
        <Route path="/clientes/novo" element={<ClientForm />} />
        <Route path="/clientes/editar/:id" element={<ClientForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;