import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");  // Estado para el nombre de usuario
  const [password, setPassword] = useState("");  // Estado para la contraseña
  const [error, setError] = useState("");  // Estado para errores
  const [loading, setLoading] = useState(false);  // Estado para manejar el estado de carga
  const navigate = useNavigate();  // Hook para navegar entre páginas

  const handleLogin = async () => {
    // Validación simple de los campos
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);  // Activa el estado de carga

    try {
      // Realiza la solicitud POST al backend para hacer login
      const response = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });

      console.log("Login successful:", response.data);

      // Si la respuesta es válida y contiene un usuario
      if (response.data && response.data.user) {
        setError("");  // Limpia el error
        navigate("/admin/mesas");  // Redirige al usuario a la página de mesas
      } else {
        setError("Unexpected response format");  // Si el formato de respuesta no es el esperado
      }

    } catch (err) {
      // Manejo de errores detallado
      if (err.response) {
        setError(`Error: ${err.response.data.error || "La base de datos no encontro al usuario"}`);  // Error de la respuesta
      } else if (err.request) {
        setError("No response received from the server");  // Si no se recibe respuesta
      } else {
        setError(`Request error: ${err.message}`);  // Otro tipo de error
      }

      console.error("Login error:", err.response?.data || err.message);
    } finally {
      setLoading(false);  // Desactiva el estado de carga después de la solicitud
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
