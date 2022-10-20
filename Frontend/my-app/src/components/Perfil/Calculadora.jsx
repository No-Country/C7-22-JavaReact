import React from 'react'
import './Perfil.css'
import { useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CoinsContext } from '../../context/CoinsContext'
import { useAuth } from '../../hooks/useAuth'
import axios from '../../api/axios'
export default function Calculadora() {
    
    const {id} =useParams()
    const [usd, setUsd] = useState("");
    const {coins} = useContext(CoinsContext)
    const {auth} = useAuth();

    const filteredCoin = coins.filter((coin) => coin.name.toLowerCase().includes(id))


    const PURCHASE_URL= `wallets/exchange/${id}`

    const token = auth
    const comprarCripto=()=>{
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
   
       })
   
       .catch(()=>{
           console.log("No Server Response")
       })
   
    }

    const unidades = usd/filteredCoin.current_price

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
                                <input className="me-4 mb-3"
                                    type="number"
                                    name="text"
                                    placeholder="0.00"
                                    onChange={(e)=> setUsd(e.target.value)}
              
                                />
                                <button type="button" className="btn btn-dark me-3">USD</button>
                            </div>

                            <div class="btn-group" role="group">
                                <input className="me-3 mb-3" type="number" name="text" placeholder="0.00" value = {unidades}/>
                                <button id="btnGroupDrop1" type="button" class="btn btn-dark rounded-3" data-bs-toggle="dropdown" data-bs-dismiss="modal" >
                                    CRIPTO
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li class="dropdown-item">Bitcoin</li>
                                    <li class="dropdown-item">Cardano</li>
                                </ul>
                            </div>

                            <div>
                                <button type="button" className="btn btn-success m-3" data-bs-dismiss="modal" onClick={comprarCripto}>Comprar</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
