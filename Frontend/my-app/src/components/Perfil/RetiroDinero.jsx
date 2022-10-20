import { useState } from "react"
import { useAuth } from "../../hooks/useAuth";
import axios from "../../api/axios";
import { Link } from "react-router-dom";



/*Este modal hay que incluirlo en el boton de ingresar dinero que esta
 en components/IniciarSesion/PlataformaCripto/DineroDisponible/DineroDisponible.jsx /
*/
export default function RetiroDinero
  () {


    const [usd, setUsdBalance] = useState("");
    const {auth} = useAuth();

    const WITHDRAW_URL= 'wallets/me/withdraw'

    const token = auth
    const retirarDinero=()=>{
      const data = {
        usdBalance:usd,
        
       }
    
       

       axios.patch(WITHDRAW_URL, data,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
       .then(res => {
           console.log(res)
   
       })
   
       .catch(()=>{
           console.log("No Server Response")
       })
   
    }

  return (
    <>
<div className='register'>
      <div className="card text-center">
        <div className="card-header">
          <h5 className="card-title">Retirar dinero</h5>
        </div>
        <div className="card-body">
          <p clasNames="card-text">¿Cuánto dinero deseas Retirar?</p>
          <input className="mb-4" 
                     type="number"
                     name="text"
                     placeholder="0.00"
                     onChange={(e)=> setUsdBalance(e.target.value)}
              
              />
          <div className="card-footer text-muted">
            <button type="button" className="btn btn-success me-3" onClick={retirarDinero}>Aceptar</button>
            <Link to="/plataforma">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button> 
            </Link>
           
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}
