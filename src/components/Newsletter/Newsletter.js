import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    alert("ایمیل شما با موفقیت ثبت شد ✨");

    setEmail("");
  };


  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span className="newsletter-label">
          STAY UPDATED
        </span>

        <h2>
          از پیشنهادهای ویژه باخبر شو
        </h2>

        <p>
          برای دریافت جدیدترین محصولات و تخفیف‌های ویژه ایمیلت را وارد کن.
        </p>


        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="ایمیل شما"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            عضویت
          </button>

        </form>

      </div>

    </section>
  );
};

export default Newsletter;



























