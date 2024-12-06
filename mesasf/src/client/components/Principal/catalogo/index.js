import React from "react";
import "./catalogo.css";
import imagenProducto1 from './assets/img/im1.jpg';
import imagenProducto2 from './assets/img/im6.webp';
import imagenProducto3 from './assets/img/im3.webp';
import imagenProducto4 from './assets/img/im4.webp';
import imagenProducto5 from './assets/img/im5.webp';

const items = [
  { id: 1, nombre: "Producto 1", imagen: imagenProducto1, descripcion: "Descripción breve del producto", precio: "$50" },
  { id: 2, nombre: "Producto 2", imagen: imagenProducto2, descripcion: "Descripción breve del producto", precio: "$75" },
  { id: 3, nombre: "Producto 3", imagen: imagenProducto3, descripcion: "Descripción breve del producto", precio: "$120" },
  { id: 4, nombre: "Producto 4", imagen: imagenProducto4, descripcion: "Descripción breve del producto", precio: "$90" },
  { id: 5, nombre: "Producto 5", imagen: imagenProducto5, descripcion: "Descripción breve del producto", precio: "$60" },
  { id: 6, nombre: "Producto 6", imagen: imagenProducto1, descripcion: "Descripción breve del producto", precio: "$85" },
  { id: 7, nombre: "Producto 7", imagen: imagenProducto2, descripcion: "Descripción breve del producto", precio: "$130" },
  { id: 8, nombre: "Producto 8", imagen: imagenProducto3, descripcion: "Descripción breve del producto", precio: "$110" },
  { id: 9, nombre: "Producto 9", imagen: imagenProducto4, descripcion: "Descripción breve del producto", precio: "$70" },
];

const CatalogoBase = () => {
  return (
    <div className="catalogo-base-container">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.imagen} alt={item.nombre} className="item-imagen" />
          <h3 className="item-nombre">{item.nombre}</h3>
          <p className="item-descripcion">{item.descripcion}</p>
          <p className="item-precio">{item.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default CatalogoBase;