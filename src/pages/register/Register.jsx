import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  console.log("test");
  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="formSide">
            <h1>Register</h1>
            <form action="post">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <button>Sign up</button>
            </form>
          </div>
          <div className="decSide">
            <h1>Filler Text</h1>
            <p>Even More Filler Text</p>
            <span>More things</span>
            <Link to="/login">
              <button>Go to login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
