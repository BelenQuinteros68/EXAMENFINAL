import React, { useState } from 'react';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Usuario registrado correctamente');
    } else {
      alert("Por favor ingrese todos los campos.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', background: 'linear-gradient(to right, #FFB6C1, #E0FFFF)' }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              width: '250px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              width: '250px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#FFB6C1',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;

