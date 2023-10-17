import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <div style={{ minHeight: "87vh" }}>{children}</div>
        <Footer />
      </div>
    );
  }
};

export default Protected;
