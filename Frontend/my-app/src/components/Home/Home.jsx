import './Home.css'
import { MainCriptos } from '../MainCriptos/MainCriptos';
import { RegisterHome } from '../RegisterHome/RegisterHome';
export const Home = () => {
    return (
        <div>
            <div className="pb-5">

                <div className="firstSection">
                    <div className="titleFirstSection">
                        <p>
                            Tu sueldo ahora genera <br/>ganancias extras.<br/> Comprá fácil con tu<br/> celular.
                        </p>
                        <button className="btn btn-light rounded-5">Crea tu cuenta</button>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-around flex-wrap">
                    <div class="d-flex flex-column align-items-center py-4 infoHome">
                        <h3>+ 103,892</h3>
                        <p>Transacciones realizadas</p>
                    </div>
                    <div class="d-flex flex-column align-items-center py-4 infoHome">
                        <h3>5,428</h3>
                        <p>Usuarios que confían</p>
                    </div><div class="d-flex flex-column align-items-center py-4 infoHome">
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

