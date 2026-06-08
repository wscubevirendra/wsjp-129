import React from "react";

export default function Hero({ image, children }) {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          {children}
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={image}
            alt="hero"
            className="img-fluid rounded shadow"
          />
        </div>

      </div>
    </section>
  );
}