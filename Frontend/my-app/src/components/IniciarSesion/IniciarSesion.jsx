import { useState } from "react"
import './IniciarSesion.css'
import { useNavigate} from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

import axios from "../../api/axios";

const LOGIN_URL = "/auth/login";
export const IniciarSesion=()=> {
  const {setAuth,setToken} = useAuth();

  const [errorMessage, setErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate()

  const handleLogin =  (e) => {
    e.preventDefault();

    const data = {
      email:email,
      password:password
     }
  
       axios.post(LOGIN_URL,data)
      .then(res => {
          console.log(res)
          setEmail("")
          setPassword("")
          const accessToken = res?.data?.token;
          console.log(accessToken)
          setToken(accessToken);
          window.localStorage.setItem("token",res?.data?.token)
          setAuth(localStorage.getItem("token",res?.data?.token))
          navigate("/plataforma")
      })

      .catch(()=>{
        console.log("No Server Response")
        setErrorMessage(true)
        setTimeout(()=>{
          setErrorMessage(false)
        },5000)
      })

    
    
  }
  return (
    <div className="loginContainer">
      <form  onSubmit={handleLogin} className="formLoginContainer">
        <h2>Iniciar sesión</h2>
        <div className="pt-4 inputContainer">
          <p>Correo electrónico o nombre de usuario</p>
          <input type="text" 
                  value={email}
                  name="Email" 
                  placeholder="Correo electrónico o nombre de usuario"
                  onChange={(e)=> setEmail(e.target.value)}
                  autocomplete="off"
                  className={errorMessage?"inputLoginError":"inputLogin"}
                  
          />
                  
        </div>
        <div className="pt-2 inputContainer">
         <p>Contraseña</p>
         <input type="password" 
              value={password}
              name="Password" 
              placeholder="Contraseña"
              onChange={(e)=> setPassword(e.target.value)}
              className={errorMessage?"inputLoginError":"inputLogin"} />
              {errorMessage&&<div className="messageError"><label>
                Contraseña o usuario invalida 
            </label></div>
          } 
        </div>
          
        <div className="linksLogin">
        
        <button className="btn btn-success">Iniciar sesión</button>
        
        </div>
        
      </form>
    </div>
  )
}
