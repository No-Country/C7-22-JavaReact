import './DineroDisponible.css'
export const DineroDisponible = () => {
    return (
        <div>
            <div className="infoDineroDisponible">
                <h2>Dinero disponible</h2>
                <p>$ 0.00</p>
                <div>
                    <button className="btn btn-dark me-2 fundingButton">Ingresar dinero</button>
                    <button className="btn btn-dark fundingButton">Retirar dinero</button>
                </div>
            </div>
            
            <div className="botonActionContainer">
                <button className="btn btn-success actionButton">Mis criptomonedas</button>
                <button className="btn btn-success actionButton">Comprar criptomonedas</button>

            </div>
        </div>
    );
}

