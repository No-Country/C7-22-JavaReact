import './DineroDisponible.css'
import { Link } from 'react-router-dom';
export const DineroDisponible = ({wallet}) => {
    return (
        <div>
            <div className="infoDineroDisponible">
                <h2>Dinero disponible</h2>
                <p>$ {wallet.usdBalance}</p>
                <div>
                <Link to="/plataforma/ingresodinero">
                        <button className="btn btn-dark me-2 fundingButton">Ingresar dinero</button>
                    </Link>
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

