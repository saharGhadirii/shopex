import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./Checkout.css";

const Checkout = () => {

  const { cart, totalPrice, dispatch } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    postalCode: ""
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

    dispatch({
      type: "CLEAR"
    });
  };


  if (cart.length === 0 && !submitted) {
    return (
      <main className="checkout-page">

        <div className="checkout-empty">

          <h2>
            سبد خرید شما خالی است
          </h2>

          <p>
            برای ثبت سفارش ابتدا محصولی به سبد خرید اضافه کنید.
          </p>

          <button
            onClick={() => navigate("/products")}
          >
            مشاهده محصولات
          </button>

        </div>

      </main>
    );
  }


  if (submitted) {
    return (
      <main className="checkout-page">

        <div className="checkout-success">

          <div className="success-icon">
            ✓
          </div>

          <span>
            ORDER CONFIRMED
          </span>

          <h1>
            سفارش شما با موفقیت ثبت شد
          </h1>

          <p>
            ممنون که SHOPEX را برای خرید خود انتخاب کردید.
          </p>

          <button
            onClick={() => navigate("/products")}
          >
            ادامه خرید
          </button>

        </div>

      </main>
    );
  }


  return (
    <main className="checkout-page">

      <div className="checkout-container">

        <div className="checkout-header">

          <span>
            CHECKOUT
          </span>

          <h1>
            تکمیل سفارش
          </h1>

          <p>
            اطلاعات ارسال سفارش خود را وارد کنید.
          </p>

        </div>


        <div className="checkout-layout">

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <h2>
              اطلاعات ارسال
            </h2>


            <div className="checkout-field">

              <label>
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="checkout-field">

              <label>
                شماره تماس
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="09123456789"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            <div className="checkout-field">

              <label>
                آدرس
              </label>

              <textarea
                name="address"
                placeholder="آدرس کامل خود را وارد کنید"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>


            <div className="checkout-field">

              <label>
                کد پستی
              </label>

              <input
                type="text"
                name="postalCode"
                placeholder="1234567890"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="submit-order-btn"
            >
              ثبت سفارش
            </button>

          </form>


          <div className="order-summary">

            <h2>
              خلاصه سفارش
            </h2>


            <div className="summary-products">

              {cart.map((item) => (

                <div
                  className="summary-product"
                  key={item.id}
                >

                  <div className="summary-product-image">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  </div>


                  <div className="summary-product-info">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.quantity} × {item.price} $
                    </span>

                  </div>

                </div>

              ))}

            </div>


            <div className="summary-total">

              <span>
                مبلغ نهایی
              </span>

              <strong>
                {totalPrice} $
              </strong>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Checkout;