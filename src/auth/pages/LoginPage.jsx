import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext )

  const onLogin = () => {

    login('Fiamma Muscari');
   
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className=" mb-3">LoginPage</h1>
      <hr className=" mb-3"/>

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};