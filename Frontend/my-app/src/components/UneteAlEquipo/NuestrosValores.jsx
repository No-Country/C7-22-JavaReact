import React from "react";

export default function NuestrosValores() {
  return (
    <>
      <div className="card mb-3 padLeft1" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/assets/colaborar.png"
              className="img-fluid rounded-start"
              alt="img de Colaboracion"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Colaboración</h5>
              <p className="card-text">
                Nos comunicamos abiertamente. Trabajamos en equipo hacia
                objetivos mutuos que nos permitan construir el ecosistema entre
                todos.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="card mb-3 padLeft2" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Centrado en el usuario</h5>
              <p className="card-text">
              Protegemos a nuestros usuarios colocando en primer lugar las
                necesidades de nuestros usuarios y dando un servicio de calidad.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/assets/centradousuario.png"
              className="img-fluid rounded-end"
              alt="Centrada en el usuario"
            />
          </div>
        </div>
      </div>
      <div className="card mb-3 padLeft1" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/assets/fortaleza.png"
              className="img-fluid rounded-start"
              alt="fortaleza"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Fortaleza</h5>
              <p className="card-text">
                Estamos impulsados por los resultados. Logramos que se hagas las
                cosas. Somos apasionados y trabajamos duro. Cuando fallamos,
                aprendemos rápido y nos recuperamos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 padLeft2" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Libertad</h5>
              <p className="card-text">
              Ejercemos de forma responsable y autónoma. Empoderamos a quienes
                nos rodean. Nuestro equipo es diverso y desafiamos el status
                quo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/assets/libertad.png"
              className="img-fluid rounded-start"
              alt="Libertad"
            />
          </div>
          
        </div>
      </div>
      
      
    </>
  );
}
