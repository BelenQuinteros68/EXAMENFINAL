import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "@fontsource/poppins"; 
import './App.css';

import MesasList from './components/MesasList';
import MesasForm from './components/MesasForm';
import MesasEdit from './components/MesasEdit';
import Login from './components/Login';
import Registro from './components/Registro';
import './styles.css';

const App = () => {
  const userLoggedIn = localStorage.getItem('userToken'); // Verifica si el usuario está logueado

  return (
    <Router>
      <Routes>
        {}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />

        <Route path="/" element={userLoggedIn ? <Navigate to="/mesas" /> : <Login />} />
        
        {}
        <Route path="/registro" element={<Registro />} />

        {}
        <Route path="/mesas" element={userLoggedIn ? <MesasList /> : <Navigate to="/" />} />

        {}
        <Route path="/mesas/form" element={userLoggedIn ? <MesasForm /> : <Navigate to="/" />} />

        {}
        <Route path="/mesas/edit/:id" element={userLoggedIn ? <MesasEdit /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;


