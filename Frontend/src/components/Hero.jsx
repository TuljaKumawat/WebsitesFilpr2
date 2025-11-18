import React from "react";
import "./header.css";

const Hero = () => {
  return (
    <section className="hero-section text-center text-light d-flex align-items-center justify-content-center">
      <div>
        <h1 className="fw-bold">Welcome to Our Company</h1>
        <p className="mt-3">We build amazing projects for amazing clients</p>
        <a href="#projects" className="btn btn-primary px-4 mt-3">Explore Projects</a>
      </div>
    </section>
  );
};

export default Hero;
