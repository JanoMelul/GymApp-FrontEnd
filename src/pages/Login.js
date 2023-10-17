import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const Login = () => {
  const { handleLogin } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const changeEmailHandler = (event) => {
    if (event.target.value === "") {
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
    } else {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    if (event.target.value === "") {
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
    } else {
      passwordRef.current.style.borderColor = "";
      passwordRef.current.style.outline = "";
    }
    setPassword(event.target.value);
  };

  const signInHandler = () => {
    setRegister(true);
    if (email === "") {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }

    if (password === "") {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "orange";
      passwordRef.current.style.outline = "none";
      return;
    }

    handleLogin(email);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-center font-semibold mb-6">
          Inicio de Sesión
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={emailRef}
              value={email}
              onChange={changeEmailHandler}
            />
            {register && email === "" && (
              <p className="text-red-600">*Email es obligatorio</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={passwordRef}
              value={password}
              onChange={changePasswordHandler}
            />
            {register && password === "" && (
              <p className="text-red-600">*Contraseña es obligatoria</p>
            )}
          </div>
          <div className=" flex justify-evenly">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white shadow-xl rounded hover:bg-blue-600"
              onClick={signInHandler}
            >
              Iniciar Sesión
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-blue-500 bg-white rounded hover:bg-blue-500 hover:text-white"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
