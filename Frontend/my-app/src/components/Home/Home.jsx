import './Home.css'
import { MainCriptos } from '../MainCriptos/MainCriptos';
import { RegisterHome } from './RegisterHome/RegisterHome';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
export const Home = () => {

    const {auth} = useAuth()

    return (
        <div>
            <div className="pb-5">

                <div className="firstSection">
                    <div className="titleFirstSection">
                        <p>
                            Tu sueldo ahora genera <br/>ganancias extras.<br/> Comprá fácil con tu<br/> celular.
                        </p>
                        
                        {!auth.length?<Link to="/register">
                            <button className="btn btn-light rounded-5">Crea tu cuenta</button>
                        </Link>:<div></div>}
                        
                        
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-around flex-wrap">
                    <div className="d-flex flex-column align-items-center py-4 infoHome">
                        <h3>+ 103,892</h3>
                        <p>Transacciones realizadas</p>
                    </div>
                    <div className="d-flex flex-column align-items-center py-4 infoHome">
                        <h3>5,428</h3>
                        <p>Usuarios que confían</p>
                    </div><div className="d-flex flex-column align-items-center py-4 infoHome">
                        <h3>+ 103,892</h3>
                        <p>Transacciones realizadas</p>
                    </div>
                </div>
            <MainCriptos/>
            <div className="sentimentContainer">
                <h2>Sentimiento del mercado</h2>
                <img src="./assets/sentiment-market.png" alt="sentimiento del mercado" />
            </div>
            <RegisterHome/>
        </div>
    );
}

