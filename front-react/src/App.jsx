import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar"; // Asegúrate de tener el Navbar importado.

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated} // Pasa setIsAuthenticated aquí
      />
    </Router>
  );
};

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/login";

  return (
    <>
      {showNavbar && isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />} {/* Pasa setIsAuthenticated */}
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginForm setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
