import React, { useState } from "react";
import axios from "axios";
import './formu.css'

function RegistroUsuario() {
  const [usuario, setUsuario] = useState({
    Nombre: "",
    Contraseña: "",
    Email: "",
    Telefono: "",
    FechaInicioContrato: "",
    cedula: "",
    rol: "", 
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUsuario({
      ...usuario,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", usuario.foto);
    formData.append("Nombre", usuario.Nombre);
    formData.append("Contraseña", usuario.Contraseña);
    formData.append("Email", usuario.Email);
    formData.append("Telefono", usuario.Telefono);
    formData.append("FechaInicioContrato", usuario.FechaInicioContrato);
    formData.append("cedula", usuario.cedula);
    formData.append("rol", usuario.rol);

    try {
      const response = await axios.post("/api/usuarios/upload", formData);
      const imageUrl = response.data.imageUrl;

      setUsuario({ ...usuario, fotoUrl: imageUrl });
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="Nombre"
          value={usuario.Nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="Contraseña"
          value={usuario.Contraseña}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="Email"
          value={usuario.Email}
          onChange={handleChange}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          name="Telefono"
          value={usuario.Telefono}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de Inicio Contrato:
        <input
          type="date"
          name="FechaInicioContrato"
          value={usuario.FechaInicioContrato}
          onChange={handleChange}
        />
      </label>
      <label>
        Cédula:
        <input
          type="text"
          name="cedula"
          value={usuario.cedula}
          onChange={handleChange}
        />
      </label>
      <label>
        Rol:
        <select
          name="rol"
          value={usuario.rol}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecciona un rol
          </option>
          <option value="1">Administrador</option>
          <option value="2">Empleado</option>
        </select>
      </label>
      <label>
        Foto:
        <input
          type="file"
          name="foto"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Registrar Usuario</button>
    </form>
  );
}

export default RegistroUsuario;

