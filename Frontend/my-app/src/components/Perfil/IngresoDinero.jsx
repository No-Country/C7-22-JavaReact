import React from 'react'




/*Este modal hay que incluirlo en el boton de ingresar dinero que esta
 en components/IniciarSesion/PlataformaCripto/DineroDisponible/DineroDisponible.jsx /
*/
export default function IngresoDinero
  () {
  return (
    <>
<div className='register'>
      <div className="card text-center">
        <div className="card-header">
          <h5 className="card-title">Ingresar dinero</h5>
        </div>
        <div className="card-body">
          <p clasNames="card-text">¿Cuánto dinero deseas ingresar?</p>
          <input className="mb-4" type="number" name="text" placeholder="$ 0.00"  />
          <div className="card-footer text-muted">
            <button type="button" className="btn btn-success me-3">Aceptar</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button> 
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}
