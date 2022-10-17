import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import './IniciarSesion.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";

const LOGIN_URL = "/users/login";
export const IniciarSesion=()=> {
  const {setAuth} = useContext(AuthContext);
 /* const userRef = useRef();
  const errRef =useRef();*/

  const [errorMessage, setErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleLogin = (e) => {
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
          console.log(accessToken);
          setAuth({email,password,accessToken});
          navigate("/plataforma")
      })

      .catch(()=>{
        console.log("No Server Response")
        setErrorMessage(true)
        setTimeout(()=>{
          setErrorMessage(false)
        },5000)
      })

    /*try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({username:email,password:password}),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
          }
        );

        

        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        setAuth({username,password,accessToken});
        setEmail("")
        setPassword("")
        setSuccess(true);
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
    }*/


    
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
        <Link to="/"><button className="btn btn-light passwordReset">Olvide mi contraseña</button></Link> 
        <button className="btn btn-success">Iniciar sesión</button>
        
        </div>
        
      </form>
    </div>
  )
}
