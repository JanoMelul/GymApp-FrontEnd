import React from "react";

const Feature = ({ title, description }) => (
  <div className="p-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Feature;
