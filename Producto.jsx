import React from "react";
import ProductoCard from "./ProductoCard";

const Producto = ({ productos, onEdit }) => {
  return (
    <div className="producto-list">
      {productos.map((producto) => (
        <ProductoCard key={producto.Id_Producto} producto={producto} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default Producto;
