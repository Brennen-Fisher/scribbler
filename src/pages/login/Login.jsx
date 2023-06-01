import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Filler Text</h1>
            <p>Even More Filler Text</p>
            <span>More things</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form action="post">
              <input type="text" placeholder="Username"/>
              <input type="text" placeholder="Password"/>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
