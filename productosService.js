export const getProductos = async () => {
    const response = await fetch("http://localhost:5000/api/productos");
    const data = await response.json();
    return data;
  };
  