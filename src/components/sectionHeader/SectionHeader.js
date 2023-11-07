import React from "react";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-extrabold text-gray-800">{title}</h1>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export default SectionHeader;
