import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientList from './pages/ClientList';
import ClientForm from './pages/ClientForm';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/clientes" element={<ClientList />} />
          <Route path="/clientes/novo" element={<ClientForm />} />
          <Route path="/clientes/editar/:id" element={<ClientForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/clientes" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;