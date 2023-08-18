import React, { useState } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isActive, setIsActive] = useState("login");
  const url = "#";

  const handleButtonClick = (button) => {
    setIsActive(button);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className={style.logins}>
      <div className={style.wrapper}>
        <div className={style.rightSide}>
          <div className={style.buttons}>
            <button
              // className={`${style.switchBtn} ${
              //   isActive ? style.active : style.inactive
              // }`}
              className={isActive === "login" ? style.active : style.switchBtn}
              onClick={() => handleButtonClick("login")}
            >
              Login
            </button>
            <button
              // className={`${style.switchBtn} ${
              //   isActive ? style.active : style.inactive
              // }`}
              className={
                isActive === "register" ? style.active : style.switchBtn
              }
              onClick={() => handleButtonClick("register")}
            >
              Register
            </button>
          </div>
          {isActive === "login" && (
            <div className={style.loginForm}>
              <form onSubmit={handleSubmit} className={style.formLogin}>
                <div>
                  <input
                    className={style.inputForm}
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div>
                  <input
                    className={style.inputForm}
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className={style.forget}>
                  <span>
                    <input type="checkbox" />
                    Remember Me
                  </span>
                  <span>
                    <a href={url}>Forget Password?</a>
                  </span>
                </div>
                <button className={style.loginFormButton}><Link to="/">Log In</Link></button>
                <div className={style.bottomLogin}>
                  <span> Not a Memeber </span>
                  <a href={url}>Register?</a>
                </div>
              </form>
            </div>
          )}
          {isActive === "register" && (
            <div className={style.registerForm}>
              <form className={style.formRegister} onSubmit={handleSubmit}>
                <div>
                  <input
                    className={style.inputForm}
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <input
                    className={style.inputForm}
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div>
                  <input
                    className={style.inputForm}
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                </div>
                <div>
                  <input
                    className={style.inputForm}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={style.termcondition}>
                  <span>
                    <input type="checkbox" />
                    Terms & Conditions
                  </span>
                </div>
                <button className={style.registerFormButton}>Register</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
