import './RegisterHome.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export const RegisterHome = () => {

    const {auth} = useAuth();

    return (
        <div className="container-fluid">
            <div className="row registerContainer">
                <div className="col-md-6 firstContent">
                   <p>Hacemos de las cripto <br/>algo sencillo.<br/>Regístrate y comenzá<br/>en minutos.</p> 
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12 secondContent pb-4">
                            <h2>
                            Crea tu cuenta
                            </h2>
                            <p>
                                
                            {!auth.length?<Link to="/register">Regístrate</Link>:<>Registrate</>} desde el sitio web.
                            </p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 secondContent pb-4">
                        <h2>
                            Deposita
                            </h2>
                            <p>
                            Transferí desde tu cuenta bancaria o envia una stablecoin a tu cuenta CriptoAlgo
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 secondContent">
                        <h2>
                            Guarda, compra y vende
                            </h2>
                            <p>
                            Tu dinero en pesos, bitcoin y otras cripto. Úsalo como quieras
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

