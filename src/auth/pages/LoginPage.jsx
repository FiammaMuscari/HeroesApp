import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate()
  const onLogin = () =>{
    navigate('/',{
      replace:true
    })
  }

  return (
    <div className="container nt-5">
      <h1>LoginPage</h1>
      <hr />
      <button
      className='btn btn-primary'
      onClick={onLogin}
      >Back to Login</button>
    </div>
  );
};
