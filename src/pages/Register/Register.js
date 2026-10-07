import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {

  const { register } = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");


    if (password !== confirmPassword) {
      setError("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }


    if (password.length < 6) {
      setError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }


    register(name, email, password);

    navigate("/profile");
  };


  return (
    <main className="register-page">

      <div className="register-card">

        <div className="register-header">

          <span className="register-label">
            CREATE ACCOUNT
          </span>

          <h1>
            ساخت حساب کاربری
          </h1>

          <p>
            برای تجربه بهتر خرید در ShopeX حساب خودت را بساز.
          </p>

        </div>


        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              نام و نام خانوادگی
            </label>

            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>


          <div className="form-group">

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


          <div className="form-group">

            <label>
              رمز عبور
            </label>

            <input
              type="password"
              placeholder="حداقل ۶ کاراکتر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>


          <div className="form-group">

            <label>
              تکرار رمز عبور
            </label>

            <input
              type="password"
              placeholder="رمز عبور را دوباره وارد کنید"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

          </div>


          {error && (
            <p className="register-error">
              {error}
            </p>
          )}


          <button
            type="submit"
            className="register-btn"
          >
            ساخت حساب
          </button>

        </form>


        <div className="register-footer">

          <span>
            قبلاً حساب کاربری داری؟
          </span>

          <Link to="/login">
            ورود
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Register;