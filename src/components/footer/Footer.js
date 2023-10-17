import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GymApp Austral</p>
      </div>
    </footer>
  );
};

export default Footer;
