import React, { useState } from "react";
import { Icon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const SysClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clients = [
    {
      id: 1,
      dni: "12345678",
      name: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    // Agrega más datos de clientes aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      {/* Botón de "Añadir" arriba a la derecha */}
      <button
        className="px-2 py-1 bg-green-500 text-white rounded-md float-right"
        onClick={openModal}
      >
        <Icon component={AddIcon} className="mr-1" /> Añadir
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Cliente #</th>
            <th className="border p-2">DNI</th>
            <th className="border p-2">Nombre y Apellido</th>
            <th className="border p-2">Correo electrónico</th>
            <th className="border p-2">Teléfono</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border p-2">{client.id}</td>
              <td className="border p-2">{client.dni}</td>
              <td className="border p-2">{`${client.name} ${client.lastName}`}</td>
              <td className="border p-2">{client.email}</td>
              <td className="border p-2">{client.phone}</td>
              <td className="border p-2">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  onClick={openModal}
                >
                  <Icon component={AddIcon} className="mr-1" /> Detalles
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                  onClick={openModal}
                >
                  <Icon component={CloseIcon} className="mr-1" /> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="modal bg-white p-4 rounded-md w-96">
            <button
              className="close absolute top-2 right-2"
              onClick={closeModal}
            >
              <Icon component={CloseIcon} className="text-gray-500" />
            </button>
            {/* Contenido del modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SysClient;
