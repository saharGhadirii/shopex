import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    const success = login(email, password);

    if (success) {
      navigate("/profile");
      return;
    }

    setError("ایمیل یا رمز عبور اشتباه است.");
  };


  return (
    <main className="login-page">

      <div className="login-card">

        <div className="login-header">

          <span className="login-label">
            WELCOME BACK
          </span>

          <h1>
            ورود به حساب
          </h1>

          <p>
            برای ادامه خرید وارد حساب کاربری خود شوید.
          </p>

        </div>


        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="login-form-group">

            <label>
              ایمیل
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>


          <div className="login-form-group">

            <label>
              رمز عبور
            </label>

            <input
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>


          {error && (
            <p className="login-error">
              {error}
            </p>
          )}


          <button
            type="submit"
            className="login-btn"
          >
            ورود
          </button>

        </form>


        <div className="login-footer">

          <span>
            حساب کاربری نداری؟
          </span>

          <Link to="/register">
            ثبت‌نام
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Login;