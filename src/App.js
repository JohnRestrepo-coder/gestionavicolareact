import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tasks from "./pages/Tasks";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<div>Bienvenido a Gestión Avícola</div>}
              />
              <Route path="/tareas" element={<Tasks />} />
              {/* Agregar rutas adicionales aquí */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
