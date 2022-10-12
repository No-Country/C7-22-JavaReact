import React from "react";

export default function Criptomonedas() {
  return (
    <>
        <div className="tableComisiones">
            <div className=" m-3">
                <ul className="divCripto">
                    <li className="m-2 borBoton">FORMA</li>
                    <li>CriptoAlgo Transfer</li>
                    <li>Transferencia bancaria</li>
                </ul>
            </div>

            <div className=" m-3">
                <ul className="divCripto">
                    <li className="m-2 borBoton">TIEMPO</li>
                    <li>Instantáneo</li>
                    <li> 24 hrs.</li>
                </ul>
            </div>
            <div className=" m-3">
                <ul className="divCripto">
                    <li className="m-2 borBoton">COMISIÓN</li>
                    <li>Sin costo</li>
                    <li>Sin costo</li>
                </ul>
            </div>
        </div>
        <h5 className="titleComisiones mt-5" >RETIROS</h5>
        
        <div className="tableComisiones">
            <div className=" m-3">
                <ul className="divCripto">
                    <li className="m-2 borBoton">FORMA</li>
                    <li>CriptoAlgo Transfer</li>
                    <li>Transferencia bancaria</li>
                </ul>
            </div>
            <div className=" m-3">
                <ul className="divCripto">
                    <li className="m-2 borBoton">COMISIÓN</li>
                    <li>Sin costo</li>
                    <li>Sin costo</li>
                </ul>
            </div>
            </div>
            
    </>
  );
}
