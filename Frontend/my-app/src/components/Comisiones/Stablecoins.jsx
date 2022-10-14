import React from "react";

export default function Stablecoins() {
  return (
    <>
      <div className="tableComisiones">
        <div className=" m-3">
          <ul className="divCripto">
            <li className="m-2 borBoton">FORMA</li>
            <li>CriptoAlgo Transfer</li>
            <li>Ether ERC20 Token</li>
            <li>Transferencia bancaria</li>
          </ul>
        </div>

        <div className=" m-3">
          <ul className="divCripto">
            <li className="m-2 borBoton">TIEMPO</li>
            <li>Instantaneo</li>
            <li>30 Confirmaciones</li>
            <li> 1 - 5 Dias laborales.</li>
          </ul>
        </div>
        <div className=" m-3">
          <ul className="divCripto">
            <li className="m-2 borBoton">COMISIÓN</li>
            
            <li>Sin costo</li>
            <li>Sin costo</li>
            <li>10,00 USD</li>
          </ul>
        </div>
      </div>
      <h5 className="titleComisiones mt-5" >RETIROS</h5>
      <div className="tableComisiones">
        <div className=" m-3 ">
                <ul className="divCripto">
                    <li className="m-2 borBoton">FORMA</li>
                    <li>CriptoAlgo Transfer</li>
                    <li>Ether ERC20 Token</li>
                </ul>
            </div>
            <div className=" m-3 ">
                <ul className="divCripto">
                    <li className="m-2 borBoton">COMISIÓN</li>
                    <li>Sin costo</li>
                    <li>0,50 USD</li>
                </ul>
            </div>
      </div>
      
    </>
  );
}
