import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../../styles.css"; 
const MesasList = () => {
  const [mesas, setMesas] = useState([]);
  const navigate = useNavigate();
  const userLoggedIn = localStorage.getItem("userToken");

  const fetchMesas = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/mesas");
      if (response.data && Array.isArray(response.data.mesas)) {
        setMesas(response.data.mesas);
      } else {
        console.error("La respuesta no tiene un array de mesas:", response.data);
      }
    } catch (error) {
      console.error("Error al obtener las mesas:", error);
    }
  };


  const deleteMesa = async (id) => {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/api/mesas/${id}');
      if (response.status === 200) {
        alert("Mesa eliminada correctamente");
        setMesas((prevMesas) => prevMesas.filter((mesa) => mesa.id !== id));
      } else {
        alert("No se pudo eliminar la mesa");
      }
    } catch (error) {
      console.error("Error al eliminar la mesa:", error);
      alert("Hubo un problema al intentar eliminar la mesa");
    }
  };

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/dashboard");
    } else {
      fetchMesas();
    }
  }, [userLoggedIn, navigate]);

  return (
    <div className="crud-container">
      <Typography variant="h3" className="crud-title">
        Lista de Mesas
      </Typography>
      <Link to="/mesas/form">
        <Button variant="contained" className="add-button">
          Agregar Nueva Mesa
        </Button>
      </Link>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className="table-header">
                ID
              </TableCell>
              <TableCell align="center" className="table-header">
                Material
              </TableCell>
              <TableCell align="center" className="table-header">
                Dimensiones
              </TableCell>
              <TableCell align="center" className="table-header">
                Estilo
              </TableCell>
              <TableCell align="center" className="table-header">
                Color
              </TableCell>
              <TableCell align="center" className="table-header">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mesas.length > 0 ? (
              mesas.map((mesa) => (
                <TableRow key={mesa.id} className="table-row">
                  <TableCell align="center">{mesa.id}</TableCell>
                  <TableCell align="center">{mesa.material}</TableCell>
                  <TableCell align="center">{mesa.dimensiones}</TableCell>
                  <TableCell align="center">{mesa.estilo}</TableCell>
                  <TableCell align="center">{mesa.color}</TableCell>
                  <TableCell align="center">
                    <Link to={'/mesas/edit/${mesa.id}'}>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                        className="action-button"
                      >
                        Editar
                      </Button>
                    </Link>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteMesa(mesa.id)}
                      className="action-button"
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography variant="h6" className="empty-message">
                    No hay mesas disponibles.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© 2024 Tienda de Mesas. Todos los derechos reservados.</p>
  </footer>
);

export default MesasList;