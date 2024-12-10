import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ setIsAuthenticated }) {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  const handleLogout = () => {
    console.log('Logout initiated'); // Para depuración

    // Eliminar el token del localStorage
    localStorage.removeItem('access_token');

    navigate('/login');
  };

  return (
    <>
      <div className="nav-bar">
        {/* Botón para cerrar sesión */}
        <button onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>

        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              {SidebarData.map((item, index) => (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;

