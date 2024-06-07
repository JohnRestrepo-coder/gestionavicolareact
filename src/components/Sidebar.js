import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <button>
          <span className="icon">🏠</span> Menu Inicial
        </button>
      </Link>
      <Link to="/aves">
        <button>
          <span className="icon">🐔</span> Aves
        </button>
      </Link>
      <Link to="/produccion">
        <button>
          <span className="icon">🌾</span> Producción
        </button>
      </Link>
      <Link to="/proveedores">
        <button>
          <span className="icon">🚚</span> Proveedores
        </button>
      </Link>
      <Link to="/insumos">
        <button>
          <span className="icon">📦</span> Insumos
        </button>
      </Link>
      <Link to="/tareas">
        <button>
          <span className="icon">📝</span> Tareas
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
