import React from 'react'
import { Link } from 'react-router-dom'
import './Perfil.css'

export default function RegistroExitoso() {
  return (

    <div className='register'>
      <div className="card text-center">
        <div className="card-header">
          <h5 className="card-title">¡FELICITACIONES!</h5>
        </div>
        <div className="card-body">
          <p clasNames="card-text">Te pudiste registrar con éxito, solo queda Iniciar Sesión.</p>
          <Link to='/iniciarsesion'>
            <button type="button" className="btn btn-success mb-4">Iniciar Sesión</button>
          </Link>
          <div className="card-footer text-muted">
            <Link to='/'>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>



  )
}
