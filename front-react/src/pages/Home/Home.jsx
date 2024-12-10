import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./Home.css"

const Home = () => {
  // Lista de productos disponibles
  const productosDisponibles = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
  ];

  // Estado para el carrito
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  // Función para agregar productos al carrito
  const agregarAlCarrito = () => {
    if (productoSeleccionado) {
      const productoEnCarrito = {
        ...productoSeleccionado,
        cantidad,
      };
      setCarrito([...carrito, productoEnCarrito]);
    }
  };

  // Función para realizar la venta
  const realizarVenta = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    axios
      .post("http://127.0.0.1:5000/productos", { productos: carrito })
      .then((response) => {
        alert("Venta realizada con éxito!");
        setCarrito([]); // Vaciar carrito
      })
      .catch((error) => {
        console.error("Error al realizar la venta", error);
        alert("Hubo un error al realizar la venta.");
      });
  };

  return (
    <div className="home-pg">
    <Container>
      <h1 className="text-center mb-4">Sistema de Ventas</h1>
      <Row>
        {/* Lista de productos */}
        <Col md={6}>
          <h3>Productos Disponibles</h3>
          <Form.Select
            value={productoSeleccionado?.id || ""}
            onChange={(e) =>
              setProductoSeleccionado(
                productosDisponibles.find(
                  (producto) => producto.id === parseInt(e.target.value)
                )
              )
            }
          >
            <option value="">Seleccione un producto</option>
            {productosDisponibles.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.nombre} - ${producto.precio}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mt-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={cantidad}
              min="1"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="mt-3"
            onClick={agregarAlCarrito}
            disabled={!productoSeleccionado}
          >
            Agregar al carrito
          </Button>
        </Col>

        {/* Carrito de compras */}
        <Col md={6}>
          <h3>Carrito de Compras</h3>
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  {item.nombre} - Cantidad: {item.cantidad} - Precio Total: $
                  {item.precio * item.cantidad}
                </li>
              ))}
            </ul>
          )}

          <Button
            variant="success"
            className="mt-3"
            onClick={realizarVenta}
            disabled={carrito.length === 0}
          >
            Realizar Venta
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
