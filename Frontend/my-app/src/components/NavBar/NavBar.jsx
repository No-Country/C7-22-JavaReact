import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navStyle">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="imgLogo"
              src="/images/logo.png"
              alt="Logo CriptoAlgo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" me-auto mb-2 mb-lg-0 ulNavStyle">
              <Link to="/" className=" active liLinkNav">
                <li> HOME </li>
              </Link>
              <Link to="/" className=" active liLinkNav">
                <li> PRECIOS </li>
              </Link>
              <Link to="/ayuda" className=" active liLinkNav">
                <li> AYUDA </li>
              </Link>
            </ul>
            <Link to="/">
              <button className="buttonStyle" type="button">
                Creá tu cuenta
              </button>
            </Link>
            <Link to="/">
              <button className="buttonStyle" type="button">
                Iniciar Sesión
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
