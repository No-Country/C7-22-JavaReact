import React from "react";
import ConoceEquipo from "./ConoceEquipo";
import NuestrosValores from "./NuestrosValores";
import { Link } from "react-router-dom";
import "./UneteAlEquipo.css";
export default function UneteAlEquipo() {
  return (
    <>
    
      <div className="m-5">
        <div className="divContainerJob ">
          <div>
            <h2>Trabajá en CriptoAlgo</h2>
            <h4>
              Únete a nosotros y ayúdanos a incrementar la libertad del dinero
            </h4>
            <Link to="/vacantes">
              <button className="buttonStyle">Ver vacantes</button>
            </Link>
          </div>

          <div className="imgLeft ">
            <img
              className="sizeImg"
              src="../../assets/trabajaconnosotros.jpg"
              alt="Mujer trabajando"
            />
          </div>
        </div>
        
        <div className="divOurValues">
          <h4>Nuestros valores</h4>
          <p>
            Los valores fundamentales de CriptoAlgo orientan nuestro
            comportamiento, decisiones y acciones, lo que permite que nuestros
            diversos equipos internacionales puedan colaborar de manera
            unificada.
          </p>
        </div>  
          <NuestrosValores />
        
        <div className="marginLeft">
          <h2 className="m-5">Conóce a nuestro equipo</h2>
          <ConoceEquipo />
        </div>
      </div>
    </>
  );
}
