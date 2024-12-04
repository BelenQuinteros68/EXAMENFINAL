import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const MesasEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [mesa, setMesa] = useState({
    material: "",
    dimensiones: "",
    estilo: "",
    color: "",
  });

  useEffect(() => {
    const fetchMesa = async () => {
      try {
        console.log("ID recibido desde la ruta:", id);
        const response = await axios.get(`http://127.0.0.1:8000/api/mesas/${id}`);
        setMesa(response.data.mesas);
      } catch (error) {
        console.error("Error al encontrar la mesa:", error);
        alert("No se pudo cargar los datos de la mesa. Verifica si el ID existe.");
      }
    };

    fetchMesa();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/mesas/${id}`,
        mesa
      );
      if (response.status === 200) {
        alert("La mesa se actualizó correctamente");
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error al editar la mesa:", error);
      alert("Error al actualizar la mesa");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Editar mesa</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Material</label>
          <input
            type="text"
            className="form-control"
            value={mesa.material}
            onChange={(e) => setMesa({ ...mesa, material: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Dimensiones</label>
          <input
            type="text"
            className="form-control"
            value={mesa.dimensiones}
            onChange={(e) => setMesa({ ...mesa, dimensiones: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Estilo</label>
          <input
            type="text"
            className="form-control"
            value={mesa.estilo}
            onChange={(e) => setMesa({ ...mesa, estilo: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            className="form-control"
            value={mesa.color}
            onChange={(e) => setMesa({ ...mesa, color: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default MesasEdit;

