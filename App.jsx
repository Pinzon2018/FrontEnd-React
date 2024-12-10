import React, { useEffect, useState } from "react";
import Producto from "./components/Producto";
import FormularioProducto from "./components/FormularioProducto";
import { getProductos } from "./services/productoService";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  const handleCreate = async (newProduct) => {
    setProductos([...productos, newProduct]);
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setSelectedProduct(product);
  };

  const handleUpdate = (updatedProduct) => {
    const updatedProductos = productos.map((product) =>
      product.Id_Producto === updatedProduct.Id_Producto ? updatedProduct : product
    );
    setProductos(updatedProductos);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>
      <FormularioProducto
        onSubmit={isEditing ? handleUpdate : handleCreate}
        producto={selectedProduct}
        isEditing={isEditing}
      />
      <Producto
        productos={productos}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;


