import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();


  if (!user) {
    return (
      <main className="profile-page">

        <div className="profile-login-box">

          <h2>
            وارد حساب کاربری نشده‌اید
          </h2>

          <p>
            برای مشاهده پروفایل ابتدا وارد حساب خود شوید.
          </p>

          <Link
            to="/login"
            className="profile-login-btn"
          >
            ورود به حساب
          </Link>

        </div>

      </main>
    );
  }


  const handleLogout = () => {

    logout();

    navigate("/");
  };


  return (
    <main className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <div className="profile-heading">

            <span>
              MY ACCOUNT
            </span>

            <h1>
              پروفایل من
            </h1>

          </div>

        </div>


        <div className="profile-info">

          <div className="profile-item">

            <span className="profile-item-label">
              نام و نام خانوادگی
            </span>

            <strong>
              {user.name}
            </strong>

          </div>


          <div className="profile-item">

            <span className="profile-item-label">
              ایمیل
            </span>

            <strong>
              {user.email}
            </strong>

          </div>

        </div>


        <div className="profile-actions">

          <Link
            to="/products"
            className="profile-products-btn"
          >
            مشاهده محصولات
          </Link>


          <button
            className="profile-logout-btn"
            onClick={handleLogout}
          >
            خروج از حساب
          </button>

        </div>

      </div>

    </main>
  );
};

export default Profile;