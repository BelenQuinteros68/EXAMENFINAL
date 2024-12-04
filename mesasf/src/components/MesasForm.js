import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MesasForm = () => {
  const [material, setMaterial] = useState("");
  const [materialPersonalizado, setMaterialPersonalizado] = useState("");
  const [dimensiones, setDimensiones] = useState("");
  const [estilo, setEstilo] = useState("");
  const [color, setColor] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const materialFinal = material === "otro" ? materialPersonalizado : material;

    if (!materialFinal || !dimensiones || !estilo || !color) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const mesaData = { material: materialFinal, dimensiones, estilo, color };

    try {
      await axios.post("http://127.0.0.1:8000/api/mesas", mesaData);
      setMensaje("La mesa se agregó exitosamente");
      setTimeout(() => {
        navigate("/mesas"); 
      }, 2000);
    } catch (error) {
      console.error("Error al agregar la mesa:", error);
      setMensaje("Error al agregar la mesa. Intenta nuevamente.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", borderRadius: "8px", backgroundColor: "#f0f8f0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Agregar Nueva Mesa</h2>

      {mensaje && (
        <div
          style={{
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: mensaje.includes("Error") ? "#f44336" : "#4CAF50",
            color: "white",
            textAlign: "center",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>Material</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #a8d5ba", 
              fontSize: "16px",
              backgroundColor: "#f9f9f9", 
              transition: "border-color 0.3s ease",
            }}
          >
            <option value="">Seleccione el material</option>
            <option value="madera">Madera</option>
            <option value="metal">Metal</option>
            <option value="vidrio">Vidrio</option>
            <option value="trupan">Trupan</option>
            <option value="otro">Otro (especificar)</option>
          </select>
        </div>

        {material === "otro" && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>Material Personalizado</label>
            <input
              type="text"
              value={materialPersonalizado}
              onChange={(e) => setMaterialPersonalizado(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #a8d5ba", 
                fontSize: "16px",
                backgroundColor: "#f9f9f9", 
                transition: "border-color 0.3s ease",
              }}
              placeholder="Escriba el material"
            />
          </div>
        )}

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>Dimensiones</label>
          <input
            type="text"
            value={dimensiones}
            onChange={(e) => setDimensiones(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #a8d5ba", 
              fontSize: "16px",
              backgroundColor: "#f9f9f9", 
              transition: "border-color 0.3s ease",
            }}
            placeholder="Ej: 120x60x70 cm"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>Estilo</label>
          <select
            value={estilo}
            onChange={(e) => setEstilo(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #a8d5ba", 
              fontSize: "16px",
              backgroundColor: "#f9f9f9", 
              transition: "border-color 0.3s ease",
            }}
          >
            <option value="">Seleccione el estilo</option>
            <option value="moderno">Moderno</option>
            <option value="rustico">Rústico</option>
            <option value="minimalista">Minimalista</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #a8d5ba", 
              fontSize: "16px",
              backgroundColor: "#f9f9f9", 
              transition: "border-color 0.3s ease",
            }}
            placeholder="Ej: Blanco, Negro, Marrón"
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#A8D5BA",  
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Guardar Mesa
        </button>
      
      </form>
    </div>
  );
};

export default MesasForm;