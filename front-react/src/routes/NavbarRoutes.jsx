import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Inventario from "../pages/Inventario/Inventario";
import Usuario from "../pages/Usuarios/Usuario";

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/inventario" element={<Inventario />} /> 
      <Route path="/usuario" element={<Usuario />} /> 
    </Routes>
  );
};

export default NavbarRoutes;