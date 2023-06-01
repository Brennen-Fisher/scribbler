import "./login.scss";
//import '../firebase';
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import firebase from 'firebase/compat/app';
// import { signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";
// import { auth } from "../firebase";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="decSide">
            <h1>Filler Text</h1>
            <p>Even More Filler Text</p>
            <span>More things</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="formSide">
            <h1>Login</h1>
            <form action="post">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
