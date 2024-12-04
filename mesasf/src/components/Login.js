import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userToken', 'mi_token_de_usuario');
      navigate('/mesas');
    } else {
      alert("Por favor ingrese todos los campos.");
    }
  };

  const handleRegister = () => {
    navigate('/registro');
  };

  return (
    <div className="container" style={{ maxWidth: '400px', textAlign: 'center' }}>
  <h2>Iniciar Sesión</h2>
  <form onSubmit={handleLogin}>
    <input
      type="email"
      placeholder="Correo electrónico"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Iniciar sesión</button>
  </form>

      {}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleRegister}
          style={{
            backgroundColor: '#E0FFFF',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            color: '#000',
            cursor: 'pointer',
          }}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;




