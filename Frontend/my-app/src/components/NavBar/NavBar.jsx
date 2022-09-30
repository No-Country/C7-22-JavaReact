import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <nav className="navStyle">
        <>
          <img
            className="imgLogo"
            src="/images/logo.png"
            alt="Logo CriptoAlgo"
          />
        </>
        <>
          <ul className="ulNavStyle">
            <Link to="/" className="liLinkNav">
              <li className="">HOME</li>
            </Link>
            <Link to="/precios" className="liLinkNav">
              <li className="">PRECIOS</li>
            </Link>
            <Link to="/ayuda" className="liLinkNav">
              <li className=" ">AYUDA</li>
            </Link>
          </ul>
        </>
        <div className="divRight ">
          <Link to="/">
            <button  className="buttonStyle" type="button">Creá tu cuenta</button>
          </Link>

          <Link to="/">
            <button className="buttonStyle" type="button">Iniciar Sesión</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
