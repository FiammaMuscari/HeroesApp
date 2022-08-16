import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import Typed from "react-typed";


export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { formState, onInputChange } = useForm({
    username: "",
  });
  const { username } = formState;

  const onLogin = () => {
    if (username.trim().length <= 1) return;
    login(username);
    navigate("/", {
      replace: true,
    });
  };



  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vw-100 vh-100 bg-dark ">
        <img
          className=" rounded-circle" 
          src="https://c.tenor.com/OrWIV_jmwE0AAAAM/heart-i-love-you.gif"
          alt="gif"
        />
        <form onSubmit={() => onLogin()}>
          <Typed
          className="d-flex justify-content-center text-white"
            strings={[
              '"Bad Deadpool... Good Deadpool!"',
              '"Say the magic words, Fat Gandalf."',
              '"This is my most prized possession.."',
              '"Captain Deadpool! No, just Deadpool."',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <div className="d-grid gap-2 mt-3">
            <input
              style={{width:"40vw", borderRadius:"0.2em"}}
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-3" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
