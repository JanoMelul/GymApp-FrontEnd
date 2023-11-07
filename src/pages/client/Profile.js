import React, { useState } from "react";
import UserModal from "../../components/modalProfile/UserModal";

const Profile = () => {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Mi Perfil</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Nombre:</p>
          <p>Tu Nombre</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Email:</p>
          <p>tuemail@example.com</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">DNI:</p>
          <p>Tu DNI</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Telefono:</p>
          <p>Tu Teléfono</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Tipo de membresía:</p>
          <p>Tu Membresía</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">Vto Cuota:</p>
          <p>Fecha de Vencimiento</p>
        </div>
      </div>
      <button
        onClick={() => setModal(true)}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
      >
        Editar
      </button>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <UserModal close={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Profile;
