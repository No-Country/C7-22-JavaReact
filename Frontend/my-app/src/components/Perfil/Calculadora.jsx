import './Perfil.css'
import { useParams } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { CoinsContext } from '../../context/CoinsContext'
import { useAuth } from '../../hooks/useAuth'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import './Validaciones.css'
export default function Calculadora() {
    
    const {id} =useParams()
    const [usd, setUsd] = useState("");
    const [numberError, setNumberError] = useState(false);
    const {coins} = useContext(CoinsContext)
    const {auth} = useAuth();
    const navigate = useNavigate();
    const filteredCoin = coins.filter((coin) => coin.name.toLowerCase().includes(id))


    useEffect(() => {
        

        if (!localStorage.getItem("token")) {
         navigate("/iniciarsesion")
        }
     }, [navigate]);

    const numberValidation = () =>{
        const regEx = /^[0-9]+$/i;
        if(regEx.test(usd) ){
          setNumberError(false)
        }else if
          (!regEx.test(usd) || usd  === "") {
            setNumberError(true)
          }
      }
    
    
    const PURCHASE_URL= `wallets/exchange/${id}`

    const token = auth
    const comprarCripto=()=>{
        numberValidation();
        const data = {
            usdBalance:usd,
          }
    
    
       

       axios.patch(PURCHASE_URL, data,  {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
       .then(res => {
           console.log(res)
           navigate("/plataforma")
       })
   
       .catch(()=>{
           console.log("No Server Response")
       })
   
    }

    let amount = parseInt(usd)/filteredCoin[0].current_price;
    
    return (
        <div>
            <div className='register'>
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Convertir</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-footer text-muted">
                            <div className="d-flex">
                            <input className={numberError?"inputNumberError":"inputNumber"} 
                                type="number"
                                name="text"
                                placeholder="0.00"
                                onChange={(e)=> setUsd(e.target.value)}
                  
                             /> 
                                <div className="me-3 fs-3">USD</div>
                            </div>

                            <div class="d-flex" role="group">
                            <input className={numberError?"inputNumberError":"inputNumber"} 
                                disabled={true}
                                type="number"
                                name="text"
                                placeholder="0.00"
                                value={amount}
                  
                             /> 
                                <img className="criptoCards" src={filteredCoin[0].image} alt="cripto" />
                             
                            </div>

                            <div>
                                {numberError&&<div className="messageError"><label>
                                    Ingrese un monto correcto
                                </label></div>
                                } 
                                <button type="button" className="btn btn-success m-3" data-bs-dismiss="modal" onClick={comprarCripto}>Comprar</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
