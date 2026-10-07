import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

export const Navbar = () => {

  const { totalItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          SHOPEX
        </Link>


        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            خانه
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            فروشگاه
          </NavLink>
          <NavLink
           to="/about"
           className={({ isActive }) =>
           isActive ? "active-link" : ""
            }
           >
            درباره ما     
           </NavLink>

        </nav>


        <div className="navbar-actions">

          {user ? (
            <div className="user-menu">

              <Link
                to="/profile"
                className="profile-btn"
              >
                <span className="profile-icon">
                  ♡
                </span>

                <span>
                  {user.name}
                </span>
              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >
                خروج
              </button>

            </div>
          ) : (
            <div className="auth-links">

              <Link
                to="/login"
                className="login-link"
              >
                ورود
              </Link>

              <Link
                to="/register"
                className="register-link"
              >
                ثبت‌نام
              </Link>

            </div>
          )}


          <div className="cart-icon-container">

            <Link
              to="/cart"
              className="cart-btn"
            >
              🛒 سبد خرید

              <span className="cart-badge">
                {totalItems}
              </span>

            </Link>

          </div>

        </div>

      </div>

    </header>
  );
};