import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserModal = ({ children, close }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [register, setRegister] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const dniRef = useRef(null);
  const cellphoneRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const changeFirstNameHandler = (event) => {
    if (event.target.value === "") {
      firstNameRef.current.style.borderColor = "red";
      firstNameRef.current.style.outline = "none";
    } else {
      firstNameRef.current.style.borderColor = "";
      firstNameRef.current.style.outline = "";
    }
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    if (event.target.value === "") {
      lastNameRef.current.style.borderColor = "red";
      lastNameRef.current.style.outline = "none";
    } else {
      lastNameRef.current.style.borderColor = "";
      lastNameRef.current.style.outline = "";
    }
    setLastName(event.target.value);
  };

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

  const changeDniHandler = (event) => {
    if (event.target.value === "") {
      dniRef.current.style.borderColor = "red";
      dniRef.current.style.outline = "none";
    } else {
      dniRef.current.style.borderColor = "";
      dniRef.current.style.outline = "";
    }
    setDni(event.target.value);
  };

  const changeCellphoneHandler = (event) => {
    if (event.target.value === "") {
      cellphoneRef.current.style.borderColor = "red";
      cellphoneRef.current.style.outline = "none";
    } else {
      cellphoneRef.current.style.borderColor = "";
      cellphoneRef.current.style.outline = "";
    }
    setCellphone(event.target.value);
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
  const changeRepeatPasswordHandler = (event) => {
    if (event.target.value !== password) {
      repeatPasswordRef.current.style.borderColor = "red";
      repeatPasswordRef.current.style.outline = "none";
    } else {
      repeatPasswordRef.current.style.borderColor = "";
      repeatPasswordRef.current.style.outline = "";
    }
    setRepeatPassword(event.target.value);
  };

  const signUpHandler = () => {
    setRegister(true);

    if (firstName === "") {
      firstNameRef.current.style.borderColor = "red";
      firstNameRef.current.style.outline = "none";
      return;
    }

    if (lastNameRef === "") {
      lastNameRef.current.style.borderColor = "red";
      lastNameRef.current.style.outline = "none";
      return;
    }

    if (email === "") {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }

    if (cellphone === "") {
      cellphoneRef.current.style.borderColor = "red";
      cellphoneRef.current.style.outline = "none";
    }

    if (password === "") {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "orange";
      passwordRef.current.style.outline = "none";
      return;
    }

    if (repeatPassword !== password) {
      repeatPasswordRef.current.style.borderColor = "red";
      repeatPasswordRef.current.style.outline = "none";
      return;
    }
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-1/2 relative">
      <i
        onClick={() => close()}
        className=" material-icons cursor-pointer absolute top-0 right-0 p-4"
      >
        X
      </i>

      <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={firstNameRef}
              onChange={changeFirstNameHandler}
              value={firstName}
            />
            {register && firstName === "" && (
              <p className="text-red-600">*Nombre es obligatorio</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-gray-600">
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={lastNameRef}
              onChange={changeLastNameHandler}
              value={lastName}
            />
            {register && lastName === "" && (
              <p className="text-red-600">*Apellido es obligatorio</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={emailRef}
              onChange={changeEmailHandler}
              value={email}
            />
            {register && email === "" && (
              <p className="text-red-600">*Email es obligatorio</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="dni" className="block text-gray-600">
              DNI
            </label>
            <input
              type="number"
              id="dni"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={dniRef}
              onChange={changeDniHandler}
              value={dni}
            />
            {register && dni === "" && (
              <p className="text-red-600">*DNI es obligatorio</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cellphone" className="block text-gray-600">
              Número de celular
            </label>
            <input
              type="text"
              id="cellphone"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={cellphoneRef}
              onChange={changeCellphoneHandler}
              value={cellphone}
            />
            {register && cellphone === "" && (
              <p className="text-red-600">*Número de telefono es obligatorio</p>
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
              onChange={changePasswordHandler}
              value={password}
            />
            {register && password === "" && (
              <p className="text-red-600">*Contraseña es obligatoria</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-gray-600">
              Repetir contraseña
            </label>
            <input
              type="password"
              id="repeatPassword"
              className="w-full p-2 border border-gray-300 rounded"
              required
              ref={repeatPasswordRef}
              onChange={changeRepeatPasswordHandler}
              value={repeatPassword}
            />
            {register && repeatPassword === password && (
              <p className="text-red-600">*La contraseña no coincide</p>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={signUpHandler}
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
