import React from "react";

const Navbar = () => {
  return (
   <nav 
      className="navbar navbar-expand-lg navbar-dark py-3"
      style={{
        background: "linear-gradient(90deg, #0d0d0d, #1a1a1a, #000000)",
        boxShadow: "0 4px 10px rgba(227, 215, 215, 0.87)"
      }}
    >
   <div className="container">
        <a className="navbar-brand fw-bold" href="/">FLIPER</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#projects"><strong>Projects</strong></a></li>
            <li className="nav-item"><a className="nav-link" href="#clients"><strong>Clients</strong></a></li>
            <li className="nav-item"><a className="nav-link" href="#contact"><strong>Contact</strong></a></li>
            <li className="nav-item"><a className="nav-link" href="#subscribe"><strong>Subscribe</strong></a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

