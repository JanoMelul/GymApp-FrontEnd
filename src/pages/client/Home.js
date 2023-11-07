import React from "react";
import { Link } from "react-router-dom";
import gymImage from "../../assets/images/gym-image.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Bienvenido a Nuestro Gimnasio</h1>
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img src={gymImage} alt="Gimnasio" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Clases</h2>
            <p>Descubre nuestras variadas clases diseñadas para tu bienestar y acondicionamiento físico.</p>
            <Link to="/clases" className="mt-4 text-blue-500 hover:underline">Ver Clases</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2 p-4">
            <img src={gymImage} alt="Gimnasio" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre Nosotros</h2>
            <p>Aprende más sobre nuestra historia y nuestra pasión por la vida activa y saludable.</p>
            <Link to="/about" className="mt-4 text-blue-500 hover:underline">Acerca de Nosotros</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2 order-2 p-4">
            <img src={gymImage} alt="Gimnasio" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md-w-1/2 order-1 p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contacto</h2>
            <p>Contáctanos para obtener más información, ¡estamos aquí para ayudarte!</p>
            <Link to="/contact" className="mt-4 text-blue-500 hover:underline">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
