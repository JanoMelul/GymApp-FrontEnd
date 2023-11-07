import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home">
          <h1 className="text-2xl text-white font-bold">GYM APP</h1>
        </Link>
        <ul className="flex space-x-4">
          <Link to="/clases">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Clases
            </li>
          </Link>
          <Link to="/home">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Profesores
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Sobre Nosotros
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Contacto
            </li>
          </Link> 
        </ul>
        <div>
          <p className="text-white cursor-pointer">Cerrar Sesión</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
