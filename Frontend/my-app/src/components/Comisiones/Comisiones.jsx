import React from "react";
import Criptomonedas from "./Criptomonedas";
import Stablecoins from "./Stablecoins";
import "./Comisiones.css";
export default function Comisiones() {

    return (
        <>
            <div className="divComisiones">
                <h2 className="mb-3">Depósitos y retiros</h2>
                <p>
                    En CriptoAlgo queremos darte el mejor servicio, y para que nuestros
                    productos funcionen correctamente, cobramos una comisión en algunas de
                    las transacciones.
                </p>
            </div>
            <div className="divCentered divCenteredStyle">
                <div>
                    <img className="imgComisiones" src="/assets/transferencia.png" alt="Logo transferencia" />
                </div>
                <div>
                    <h6>Criptomonedas</h6>
                    <p>Tu dinero: estados y retiros</p>
                </div>
            </div>
            <h5 className="titleComisiones mt-5">DEPÓSITOS</h5>
            <Criptomonedas />

            <div className=" divCentered divCenteredStyle ">
                <div>
                    <img className="imgComisiones" src="/assets/candado.png" alt="Logo candado" />
                </div>
                <div>
                    <h6>USD stablecoins</h6>
                    <p>Robo o perdida de dispositivo y robo de cuenta</p>
                </div>
            </div>
            <h5 className="titleComisiones mt-5">DEPÓSITOS</h5>
            <Stablecoins />
        </>
    );
}
