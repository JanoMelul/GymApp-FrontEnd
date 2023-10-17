import React from "react";
import UserModal from "../components/modalProfile/UserModal";

const Profile = () => {
  return (
    <div>
      <h2>Mi Perfil</h2>
      <div>
        <p>Nombre:</p>
        <p>Email:</p>
        <p>DNI:</p>
        <p>Telefono:</p>
        <p>Tipo de membresía:</p>
        <p>Vto Cuota:</p>
      </div>

      <UserModal />
      <button>Editar</button>
    </div>
  );
};

export default Profile;
