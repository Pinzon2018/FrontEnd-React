import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ setIsAuthenticated }) => { // Asegúrate de recibir setIsAuthenticated
    const [Email_Usu, setEmail] = useState("");
    const [Contraseña_hash, setContraseña] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();

        if (!Email_Usu || !Contraseña_hash) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        axios
            .post("http://127.0.0.1:5000/login", { Email_Usu, Contraseña_hash })
            .then((response) => {
                localStorage.setItem("access_token", response.data.access_token);
                setIsAuthenticated(true); // Actualizamos el estado en App
                alert("¡Inicio de sesión exitoso!");
                navigate("/home"); 
            })
            .catch((error) => {
                console.error("Error al iniciar sesión", error);
                alert("Credenciales inválidas o error en el servidor.");
            });
    };

  return (
    <div className="login-form">
        <div className="wrapper">
          <form onSubmit={handleLogin}>
            <h1>Inicio de Sesión</h1>
            <h3 className="text-center">Ingresar</h3>

            <div className="input-box">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={Email_Usu}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
                value={Contraseña_hash} 
                onChange={(e) => setContraseña(e.target.value)} 
                required
              />
              <i className="bx bxs-lock"></i>
            </div>

            <button type="submit" className="btn">
              Ingresar
            </button>
          </form>
        </div>
    </div>
  );
};

export default LoginForm;
