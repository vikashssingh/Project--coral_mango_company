import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [errorState, setErrorState] = React.useState({
    login: "",
    register: "",
  });

  const navigate = useNavigate();

  const [loginState, setLoginState] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div className="login-comp">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                loginState.email === "vikash@coralmango.com" &&
                loginState.password === "Vikash123@"
              ) {
                localStorage.setItem("token", 1);
                navigate("/preview");
              } else {
                setErrorState({
                  login: "Invalid Credentials Provided",
                });
              }
            }}
          >
            <h1>Sign In</h1>
            {errorState.login && (
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Error! {errorState.login}
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              value={loginState.email}
              onChange={(e) => {
                setLoginState({
                  ...loginState,
                  email: e.target.value,
                });
                setErrorState({
                  login: "",
                  register: "",
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginState.password}
              onChange={(e) => {
                setLoginState({
                  ...loginState,
                  password: e.target.value,
                });

                setErrorState({
                  login: "",
                  register: "",
                });
              }}
            />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Coral Mango!</h1>
              <p>
                Use This Email id and Paasword  For Login 🔓🔑<br /> ( Email:
                <b> vikash@coralmango.com</b> & Password: <b>Vikash123@</b> )
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
