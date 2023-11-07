import React, { useState } from 'react';

const Clases = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (clase) => {
    setSelectedClass(clase);
    setShowModal(true);
  };

  const clases = [
    { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:30', nombre: 'Clase de Spinning', cupos: 15 },
    { dia: 'Martes', horaInicio: '9:30', horaFin: '10:45', nombre: 'Clase de Pilates', cupos: 12 },
    { dia: 'Lunes', horaInicio: '8:00', horaFin: '9:15', nombre: 'Clase de Yoga', cupos: 10 },
    { dia: 'Martes', horaInicio: '11:00', horaFin: '12:15', nombre: 'Clase de CrossFit', cupos: 10 },
    // Agrega más clases aquí para otros días de la semana
  ];

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Convierte las horas de inicio y fin a formato numérico
  clases.forEach((clase) => {
    const horaInicioParts = clase.horaInicio.split(':');
    clase.horaInicioNumerica = parseInt(horaInicioParts[0]) * 60 + parseInt(horaInicioParts[1]);
    const horaFinParts = clase.horaFin.split(':');
    clase.horaFinNumerica = parseInt(horaFinParts[0]) * 60 + parseInt(horaFinParts[1]);
  });

  // Ordena las clases primero por hora de inicio y luego por hora de fin
  clases.sort((a, b) => {
    if (a.horaInicioNumerica !== b.horaInicioNumerica) {
      return a.horaInicioNumerica - b.horaInicioNumerica;
    } else {
      return a.horaFinNumerica - b.horaFinNumerica;
    }
  });

  return (
    <div className="py-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Clases</h2>
      <div className="mx-auto w-4/5">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 border border-gray-300"></th>
              {diasSemana.map((dia) => (
                <th key={dia} className="py-2 px-4 bg-gray-200 border border-gray-300">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clases.map((clase, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border border-gray-300">
                  {clase.horaInicio} - {clase.horaFin}
                </td>
                {diasSemana.map((dia) => (
                  <td key={dia} className="py-2 px-4 border border-gray-300">
                    {clase.dia === dia && (
                      <div
                        onClick={() => handleClassClick(clase)}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        {clase.nombre}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-bg absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
          <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Detalles de la Clase</h3>
            <p><strong>Día:</strong> {selectedClass.dia}</p>
            <p><strong>Hora de Inicio:</strong> {selectedClass.horaInicio}</p>
            <p><strong>Hora de Fin:</strong> {selectedClass.horaFin}</p>
            <p><strong>Nombre de la Clase:</strong> {selectedClass.nombre}</p>
            <p><strong>Cupos Disponibles:</strong> {selectedClass.cupos}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clases;
