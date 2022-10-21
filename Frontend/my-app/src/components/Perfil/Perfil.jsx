import { useAuth } from "../../hooks/useAuth";
import BotonModificar from './BotonModificar'
import './Perfil.css'
import { useState, useEffect } from 'react';
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


export default function Perfil() {

    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, SetPasswordError] = useState(false);
    const [confirmPasswordError, SetConfirmPasswordError] = useState(false);

    const navigate = useNavigate();
    const [user, setUser] = useState("");

    useEffect(() => {
        

        if (!localStorage.getItem("token")) {
         navigate("/iniciarsesion")
        }
     }, [navigate]);

    const UPDATE_URL= 'users/me'
    const {auth} = useAuth();
    const token = auth

    const firstnameValidation = () => {
        const regEx = /^[a-zA-Z]{3,15}$/i;
        if(regEx.test(firstname) || firstname===""){
          setFirstnameError(false)
        }else if
          (!regEx.test(firstname)) {
            setFirstnameError(true)
          }
      }
  
      const lastnameValidation = () => {
        const regEx = /^[a-zA-Z]{3,15}$/i;
        if(regEx.test(lastname)|| lastname===""){
          setLastnameError(false)
        }else if
          (!regEx.test(lastname) ) {
            setLastnameError(true)
          }
      }
  
      const emailValidation = () =>{
        const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(regEx.test(newUsername)|| newUsername===""){
          setUsernameError(false)
        }else if
          (!regEx.test(newUsername) ) {
            setUsernameError(true)
          }
      }
  
      const passwordValidation = () => {
         const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
         if(regEx.test(newPassword) || newPassword===""){
          SetPasswordError(false)
        }else if
          (!regEx.test(newPassword) ) {
            SetPasswordError(true)
          }
      }
  
      const passwordConfirm = () => {
        if (confirmPassword !== newPassword){
          SetConfirmPasswordError(true)
        } else {
          SetConfirmPasswordError(false)
  
        }
      }


      useEffect(() => {
      

        const GETDATA_URL= 'users/me'

        axios.get(GETDATA_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setUser(res?.data)
    
        })
    
        .catch(()=>{
            console.log("No Server Response")
        })
       
        
    
    }, [token]);


      const handleUpdate = (e) => {
        e.preventDefault();
        firstnameValidation();
        lastnameValidation();
        emailValidation();
        passwordValidation();
        passwordConfirm();
       
  
        const data = {
          firstName:firstname,
          lastName:lastname,
          email:newUsername,
          password:newPassword
          
         }

        
        axios.patch(UPDATE_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
  
        .then(res=>{
          console.log(res)
          navigate("/plataforma")
        })
  
        .catch(()=>{
          console.log("No Server Response")
        })
        
        
      }

    return (
        <>
            <h2 className='mainTitle pt-5 pb-3'>Tus datos</h2>
            <h5 className='mainTitle pb-5'>Modifica tus datos desde aquí</h5>
            <form onSubmit={handleUpdate} className="registerContainerPerfil">
                <div className='formRegisterContainer divBorder'>
                    <div className=" mb-3 " style={{ maxWidth: "800px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div>
                                            <p className="titleInput ">Nombres</p>
                                                <input type="text" 
                                                name="Firstname" 
                                                placeholder="Nombres"
                                                value={firstname}
                                                onChange={(e)=> setFirstname(e.target.value)}
                                                className={firstnameError?"inputRegisterError":"inputRegister"} />
                                            <p className="instructions">Ingresa tus nombres</p>
                                        </div>
                                        <div className="d-flex align-items-center" >
                                        <input type="text"
                                                disabled={true}
                                                className="inputPerfilDisabled"
                                                value={user.firstName}
                                        />
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    {firstnameError&&<div className="messageError"><label>
                                        Ingresa un nombre con solo letras
                                    </label></div>}

                                    <div className="d-flex">
                                      <div>
                                        <p className="titleInput ">Apellidos</p>
                                          <input type="text" 
                                          name="Lastname" 
                                          placeholder="Apellidos"
                                          value={lastname}
                                          onChange={(e)=> setLastname(e.target.value)}
                                          className={lastnameError?"inputRegisterError":"inputRegister"} />
                                        <p className="instructions">Ingresa tus apellidos</p>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <input type="text"
                                                  disabled={true}
                                                  className="inputPerfilDisabled"
                                                  value={user.lastName}
                                          />
                                      </div>

                                    </div>
                                    
                                    {lastnameError&&<div className="messageError"><label>
                                    Ingresa un apellido con solo letras
                                    </label></div>}
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='formRegisterContainer divBorder'>
                    <div className=" mb-3 " style={{ maxWidth: "800px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div>
                                          <p className="titleInput">Correo electrónico</p>
                                            <input type="text" 
                                            name="Username" 
                                            placeholder="Correo electrónico"
                                            value={newUsername}
                                            onChange={(e)=> setNewUsername(e.target.value)}
                                            className={usernameError?"inputRegisterError":"inputRegister"} />
                                            <p className="instructions">Ingresa el correo electronico</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                        <input type="text"
                                                  disabled={true}
                                                  className="inputPerfilDisabled"
                                                  value={user.email}
                                          />
                                      </div>
                                      
                                    </div>
                                    
                                    {usernameError&&<div className="messageError"><label>
                                        Usa el formato nombre@ejemplo.com
                                    </label></div>}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='formRegisterContainer'>
                    <div className=" mb-3  " style={{ maxWidth: "800px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body contraseñasContainer">
                                    <p className="titleInput">Nueva contraseña</p>
                                    <input type="password"
                                    name="Password" 
                                    placeholder="Contraseña"
                                    value={newPassword}
                                    onChange={(e)=> setNewPassword(e.target.value)}
                                    className={passwordError?"inputRegisterError":"inputRegister"}/> 
                                    <p className="instructions">Mín. 8 caracteres con números y letras</p>
                                    {passwordError&&<div className="messageError"><label>
                                    Digita una contraseña de 8 caracteres con al menos un <br/>numero y una letra
                                    </label></div>}
                                    <p className="titleInput">Confirma tu contraseña</p>
                                    <input type="password"
                                    name="confirmPassword" 
                                    value={confirmPassword}
                                    onChange={(e)=> setConfirmPassword(e.target.value)}
                                    placeholder="Comfirma tu contraseña"
                                    className={confirmPasswordError||passwordError?"inputRegisterError":"inputRegister"}/>  
                                    {confirmPasswordError&&<div className="messageErrorTwo"><label>
                                    Las contraseñas deben coincidir
                                    </label></div>} 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <BotonModificar/>
                </div>
                
            </form>



        </>
    )
}


/*
  //- Input tienen que tener las validaciones 
  //- Input de crear cuenta Apellido sale initialState
  //- Imagen de cripto y de USD en la calculadora en vez de botones
  //- En el componente Perfil llamar por axios los nombres apellidos y correo del usuario
  //- Calculadora conversion en tiempo real 
  //- Eliminar los botones Mis criptomonedas y Comprar Criptomonedas
  //- Links de redes sociales
  //- El boton de comprar debe lleverte a calculadora sino a iniciar sesion
  - Cerrar sesion cuando se vence el token 
  //- Dos deciminales para valor en el componente MiPortafolio
  //- Dos deciminales para unidades en el componenete MiPortafolio
    //- Proteger las rutas "/plataforma/...."

*/