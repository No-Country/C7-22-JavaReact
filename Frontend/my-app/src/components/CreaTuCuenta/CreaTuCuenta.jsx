import './CreaTuCuenta.css'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { useState } from 'react';

export const CreaTuCuenta = () => {
    const [country, setCountry] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, SetPasswordError] = useState(false);
    const [confirmPasswordError, SetConfirmPasswordError] = useState(false);

    const loginService = () => {
      console.log(country)
      console.log(newUsername)
      console.log(newPassword)
      console.log(confirmPassword)
    }

    const emailValidation = () =>{
      const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(regEx.test(newUsername)){
        setUsernameError(false)
      }else if
        (!regEx.test(newUsername) && newUsername  === "") {
          setUsernameError(true)
        }
    }

    const passwordValidation = () => {
       const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
       if(regEx.test(newPassword)){
        SetPasswordError(false)
      }else if
        (!regEx.test(newPassword) && newPassword  === "") {
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

   
    
    loginService();

    const options = [
        {value: "Perú", label: "Perú"},
        {value: "Argentina", label: "Argentina"},
        {value: "México", label: "México"},
        {value: "Colombia", label: "Colombia"},
        {value: "Ecuador", label: "Ecuador"},
        {value: "Chile", label: "Chile"},

    ]

    const handleJoin = async (event) => {
      emailValidation();
      passwordValidation();
      passwordConfirm();
      
      try {
        console.log("Hola")
      } catch(event){
        console.log("Error")
      }
      
      
    }

    return (
        <div className="registerContainer">
        <form  className="formRegisterContainer">
          <h2>Crea una cuenta personal</h2>
          <p className="subtitle">Estas a unos pasos de entrar al mundo cripto.</p>
          <div className="pt-4">
            <p className="titleInput">País de residencia</p>
            <Select 
                    options={options}
                    onChange={(options)=> setCountry(options.value)}
            />
           
          </div>
          <div className="pt-2">
           <p className="titleInput">Correo electrónico</p>
           <input type="text" 
                name="Username" 
                placeholder="Correo electrónico"
                value={newUsername}
                onChange={({target})=> setNewUsername(target.value)}
                className={usernameError?"inputRegisterError":"inputRegister"} />
                
                
            <p className="instructions">Registrate con el correo que más utilizas</p>
            {usernameError&&<div className="messageError"><label>
                Usa el formato nombre@ejemplo.com
            </label></div>}
          </div>

          <div className="pt-2">
           <p className="titleInput">Contraseña</p>
           <input type="password"
                name="Password" 
                placeholder="Contraseña"
                value={newPassword}
                onChange={({target})=> setNewPassword(target.value)}
                className={passwordError?"inputRegisterError":"inputRegister"}/> 
            <p className="instructions">Mín. 8 caracteres con números y letras</p>   
            {passwordError&&<div className="messageError"><label>
                Digita una contraseña de 8 caracteres con al menos un <br/>numero y una letra
            </label></div>}
          </div>

          <div className="pt-2">
           <p className="titleInput">Confirma tu contraseña</p>
           <input type="password"
                name="confirmPassword" 
                value={confirmPassword}
                onChange={({target})=> setConfirmPassword(target.value)}
                placeholder="Comfirma tu contraseña"
                className={confirmPasswordError||passwordError?"inputRegisterError":"inputRegister"}/>   
                {confirmPasswordError&&<div className="messageErrorTwo"><label>
                Las contraseñas deben coincidir
            </label></div>} 
          </div>
            
          <div className="linksRegister">
          
          <input 
                 value="Comenzar"
                 className="btn btn-success"
                 onClick={handleJoin}/>
          </div>
          
          <Link to="/iniciarsesion" className="loginLink"><p >Ya tengo una cuenta</p></Link> 
        </form>
      </div>
    );
}


