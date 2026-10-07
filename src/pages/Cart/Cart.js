import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

export const Cart = () => {

  const {
    cart,
    dispatch,
    totalItems,
    totalPrice
  } = useContext(CartContext);


  if (cart.length === 0) {
    return (
      <div className="cart-empty">

        <h2>
          سبد خرید شما خالی است! 🛒
        </h2>

        <p>
          می‌توانید برای مشاهده محصولات به صفحه اصلی بروید.
        </p>

        <Link
          to="/products"
          className="back-home-btn"
        >
          مشاهده محصولات
        </Link>

      </div>
    );
  }


  return (
    <div className="cart-container">

      <div className="cart-header">

        <h2>
          سبد خرید شما ({totalItems} کالا)
        </h2>

        <button
          className="clear-btn"
          onClick={() => dispatch({ type: 'CLEAR' })}
        >
          خالی کردن سبد
        </button>

      </div>


      <div className="cart-content">


        <div className="cart-items">

          {cart.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.image}
                alt={item.title}
                className="cart-item-img"
              />


              <div className="cart-item-details">

                <h3>
                  {item.title}
                </h3>

                <span className="cart-item-price">
                  {item.price} $
                </span>

              </div>


              <div className="quantity-controls">

                <button
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE',
                      payload: item.id
                    })
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch({
                      type: 'ADD',
                      payload: item
                    })
                  }
                >
                  +
                </button>

              </div>


              <div className="cart-item-total">
                {item.price * item.quantity} $
              </div>


              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({
                    type: 'DELETE',
                    payload: item.id
                  })
                }
              >
                ✕
              </button>

            </div>

          ))}

        </div>


        <div className="cart-summary">

          <h3>
            خلاصه سفارش
          </h3>


          <div className="summary-row">

            <span>
              تعداد کل کالاها:
            </span>

            <span>
              {totalItems}
            </span>

          </div>


          <div className="summary-row total-row">

            <span>
              مبلغ قابل پرداخت:
            </span>

            <span>
              {totalPrice} $
            </span>

          </div>


          <Link
            to="/checkout"
            className="checkout-btn"
          >
            تکمیل خرید
          </Link>

        </div>

      </div>

    </div>
  );
};