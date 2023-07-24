import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  // let auth = sessionStorage.getItem("token");
  // {Laura suggestes a true statement in order to fix the broken authenticator}
  // useEffect(() => {
  console.log(store.token);
  if (token && token != "" && token != undefined) {
    navigate("/searchthebookclub");
    // }
    // Authentincate
    // if (auth === true || auth === defined || auth === "") {
    navigate("/thebookclub");
  }
  // }, []);
  return (
    <div class="dropdown-menu">
      <form class="px-4 py-3">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        New around here? Sign up
      </a>
      <a class="dropdown-item" href="#">
        Forgot password?
      </a>

      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={(e) => handleClick(e)}>Login</button>
        <Link to="/createUser">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
