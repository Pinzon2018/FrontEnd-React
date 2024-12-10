import React from "react";

const ProductoCard = ({ producto, onEdit }) => {
  return (
    <div className="producto-card">
      <h3>{producto.Nombre_Prod}</h3>
      <p>Precio Bruto: {producto.Precio_Bruto_Prod}</p>
      <p>Unidades Totales: {producto.Unidades_Totales_Prod}</p>
      <p>Marca: {producto.Marca_Prod}</p>
      <p>Estado: {producto.Estado_Prod}</p>
      <button onClick={() => onEdit(producto)}>Editar</button>
    </div>
  );
};

export default ProductoCard;
