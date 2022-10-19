import React from 'react'
import BotonModificar from './BotonModificar'
import './Perfil.css'
export default function Perfil() {
    return (
        <>
            <h2 className='mainTitle pt-5 pb-3'>Tus datos</h2>
            <h5 className='mainTitle pb-5'>Modifica tus datos desde aquí</h5>
            <div className="registerContainerPerfil">
                <form className='formRegisterContainer divBorder'>
                    <div className=" mb-3 " style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="titleInput ">Nombres</p>
                                    <input type="text" name="Firstname" placeholder="Nombres" />
                                    <p className="instructions">Ingresa tus nombres</p>
                                    <p className="titleInput ">Apellidos</p>
                                    <input type="text" name="Lastname" placeholder="Apellidos" />
                                    <p className="instructions">Ingresa tus apellidos</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <BotonModificar />
                            </div>
                        </div>
                    </div>
                </form>
                <form className='formRegisterContainer divBorder'>
                    <div className=" mb-3 " style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                <p className="titleInput">Correo electrónico</p>
                                 <input type="text" name="Username" placeholder="nombre@ejemplo.com" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <BotonModificar />
                            </div>
                        </div>
                    </div>
                </form>
                <form className='formRegisterContainer  mb-5'>
                    <div className=" mb-3  " style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                <p className="titleInput">Nueva contraseña</p>
                                <input type="password" name="Password" placeholder="nueva contraseña" />
                                <p className="instructions">Mín. 8 caracteres con números y letras</p>
                                <p className="titleInput">Confirma tu contraseña</p>
                                <input type="password" name="confirmPassword" placeholder="Confirma tu contraseña" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <BotonModificar />
                            </div>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )
}
