import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import './IniciarSesion.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";

const LOGIN_URL = "/auth";
export const IniciarSesion=()=> {
  const {setAuth} = useContext(AuthContext);
 /* const userRef = useRef();
  const errRef =useRef();*/

  const [errorMessage, setErrorMessage] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /*const [user, setUser] = useState(null);*/
  /*const [success, setSuccess] = useState(false);*/

  const navigate = useNavigate()

  /*const loginService = () => {
    console.log(username)
    console.log(password)
    console.log(user)
  }*/

  /*useEffect(()=>{
    userRef.current.focus();
  },[])

  useEffect(() => {
    setErrorMessage("");
   
  }, [username,password]);
*/
  

  /*loginService();*/

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({username,password}),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        setAuth({username,password,accessToken});
        setUsername("")
        setPassword("")
        /*setSuccess(true);*/
        navigate("/plataforma")
    } 
      catch (err) {
      if (!err?.response){
        console.log("No Server Response")
        setErrorMessage(true)
        setTimeout(()=>{
          setErrorMessage(false)
        },5000)
      }
    }


    
    /*try {
      const user = await loginService.login({
        username,
        password
      })
  
      setUser(user)
      
      
    } catch(event){
      setErrorMessage(true)
      setTimeout(()=>{
        setErrorMessage(false)
      },5000)
    }*/
    
  }
  return (
    <div className="loginContainer">
      <form  className="formLoginContainer">
        <h2>Iniciar sesión</h2>
        <div className="pt-4 inputContainer">
          <p>Correo electrónico o nombre de usuario</p>
          <input type="text" 
                  value={username}
                  name="Username" 
                  placeholder="Correo electrónico o nombre de usuario"
                  onChange={({target})=> setUsername(target.value)}
                  autocomplete="off"
                  className={errorMessage?"inputLoginError":"inputLogin"}
                  required
          />
                  
        </div>
        <div className="pt-2 inputContainer">
         <p>Contraseña</p>
         <input type="password" 
              value={password}
              name="Password" 
              placeholder="Contraseña"
              onChange={({target})=> setPassword(target.value)}
              required
              className={errorMessage?"inputLoginError":"inputLogin"} />
              {errorMessage&&<div className="messageError"><label>
                Contraseña o usuario invalida 
            </label></div>
          } 
        </div>
          
        <div className="linksLogin">
        <Link to="/"><button className="btn btn-light passwordReset">Olvide mi contraseña</button></Link> 
        <input onClick={handleLogin}
               value="Iniciar sesión"
               className="btn btn-success"
               />
        </div>
        
      </form>
    </div>
  )
}
