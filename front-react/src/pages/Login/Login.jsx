import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const LoginForm = () => {
    const [Nombre_Usu, setNombre] = useState("");
    const [Contraseña_hash, setContraseña] = useState("");
    const navigate = useNavigate(); // Crear instancia de navigate

    const handleLogin = (e) => {
        e.preventDefault();

        if (!Nombre_Usu || !Contraseña_hash) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        axios
            .post("http://127.0.0.1:5000/login", { Nombre_Usu, Contraseña_hash })
            .then((response) => {
                localStorage.setItem("access_token", response.data.access_token);
                alert("¡Inicio de sesión exitoso!");
                navigate("/home"); // Usar navigate para redirigir a /home
            })
            .catch((error) => {
                console.error("Error al iniciar sesión", error);
                alert("Credenciales inválidas o error en el servidor.");
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "seagreen", backgroundImage: "url(./assets/img/FondoLogin.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Container className="p-4 rounded-3" style={{ maxWidth: "420px", backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                <h1 className="text-center mb-4">Inicio de Sesión</h1>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de usuario"
                            required
                            value={Nombre_Usu}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            required
                            value={Contraseña_hash}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Ingresar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default LoginForm;
