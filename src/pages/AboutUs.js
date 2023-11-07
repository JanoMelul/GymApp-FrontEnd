import React from "react";
import Feature from "../components/feature/Feature";
import SectionHeader from "../components/sectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <SectionHeader title="Sobre Nosotros" subtitle="Conócenos mejor" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Feature
            title="Nuestra Misión"
            description="En el Gimnasio Moderno, nuestra misión es ayudarte a alcanzar tus objetivos de bienestar y a mantener un estilo de vida activo y saludable."
          />
          <Feature
            title="Nuestro Equipo"
            description="Nuestro equipo de entrenadores altamente capacitados está aquí para brindarte el apoyo que necesitas para alcanzar tus metas. Estamos comprometidos con tu éxito."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
