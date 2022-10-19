import React from "react";

export default function ConoceEquipo() {
  return (
    <>
      
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src="/assets/Alexander.png"
              className="img-fluid rounded-start "
              alt="Ale es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Alexander Castañeda </h5>
              <p className="card-text">
              Frontend developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/assets/MicaelaAndres.png"
              className="img-fluid rounded-start "
              alt="Mica es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Micaela Andrés</h5>
              <p className="card-text">
              Frontend developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/assets/LarryAguileraa.png"
              className="img-fluid rounded-start "
              alt="Larry es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Larry Aguilera</h5>
              <p className="card-text">
              Backend Java Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
