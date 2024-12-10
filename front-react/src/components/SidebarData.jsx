import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Usuarios',
    path: '/usuario',
    icon: <FaUserLarge />,
    cName: 'nav-text'
  },
  {
    title: 'Inventario',
    path: '/inventario',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Registro',
    path: '/registro_categoria',
    icon: <BiSolidCategory />,
    cName: 'nav-text'
  },
  {
    title: 'Cerrar sesión', // El título del botón
    path: '/login', // Redirigir a la página de login
    icon: <FaIcons.FaSignOutAlt />, // Icono de cerrar sesión
    cName: 'nav-text logout' // Una clase extra para aplicar estilos especiales
  }
];