import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="mx-auto w-1/2">
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-600"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
