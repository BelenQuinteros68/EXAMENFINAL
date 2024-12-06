import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "@fontsource/poppins"; 
import './App.css';

import MesasList from './admin/components/MesasList';
import MesasForm from './admin/components/MesasForm';
import MesasEdit from './admin/components/MesasEdit';
import Login from './admin/components/Admin';
import Registro from './admin/components/Registro';
import Principal from './client/components/Principal';
import './styles.css';

const App = () => {
  const userLoggedIn = localStorage.getItem('userToken');

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Principal />} />
        <Route 
          path="/admin/admin" 
          element={userLoggedIn ? <Login/> : <Navigate to="/admin/admin"/>} 
        />
        <Route path="/admin/registro" element={<Registro />} />
        <Route 
          path="/admin/mesas" 
          element={userLoggedIn ? <MesasList /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/mesas/form" 
          element={userLoggedIn ? <MesasForm /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/mesas/edit/:id" 
          element={userLoggedIn ? <MesasEdit /> : <Navigate to="/" />} 
        />

        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
