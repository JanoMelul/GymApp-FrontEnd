import React from "react";

const Feature = ({ title, description }) => (
  <div className="p-6 md:w-1/2">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Feature;
