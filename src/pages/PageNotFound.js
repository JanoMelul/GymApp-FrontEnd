import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          404 - Página no encontrada
        </h1>
        <p className="text-gray-600 mb-4">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/home" className="text-blue-500 hover:underline">
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
