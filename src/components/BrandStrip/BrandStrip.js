import React from "react";
import "./BrandStrip.css";

const brands = [
  "DIOR",
  "CHANEL",
  "MAC",
  "HUDA BEAUTY",
  "RARE BEAUTY",
  "ESTÉE LAUDER",
  "NARS",
  "YSL BEAUTY",
];

const BrandStrip = () => {
  return (
    <section className="brand-strip">

      <div className="brand-strip-header">
        <span>BRANDS WE LOVE</span>

        <h2>
          برندهای محبوب
        </h2>
      </div>


      <div className="brand-strip-wrapper">

        <div className="brand-strip-track">

          {[...brands, ...brands].map((brand, index) => (

            <div
              className="brand-item"
              key={`${brand}-${index}`}
            >
              {brand}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BrandStrip;