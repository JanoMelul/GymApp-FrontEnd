import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <div style={{ minHeight: "87vh" }}>{children}</div>;
  }
};

export default Protected;
