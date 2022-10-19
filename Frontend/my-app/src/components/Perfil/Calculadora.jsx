import React from 'react'
import './Perfil.css'
export default function Calculadora() {
    return (
        <div>
            <div className='register'>
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Convertir</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-footer text-muted">
                            <div>
                                <input className="me-4 mb-3" type="number" name="text" placeholder="0.00" />
                                <button type="button" className="btn btn-dark me-3">USD</button>
                            </div>

                            <div class="btn-group" role="group">
                                <input className="me-3 mb-3" type="number" name="text" placeholder="0.00" />
                                <button id="btnGroupDrop1" type="button" class="btn btn-dark rounded-3" data-bs-toggle="dropdown" data-bs-dismiss="modal" >
                                    CRIPTO
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li class="dropdown-item">Bitcoin</li>
                                    <li class="dropdown-item">Cardano</li>
                                </ul>
                            </div>

                            <div>
                                <button type="button" className="btn btn-success m-3" data-bs-dismiss="modal">comprar</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
