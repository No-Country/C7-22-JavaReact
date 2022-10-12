import './MainCriptos.css'
export const MainCriptos = () => {
    return (
        <div className="d-flex flex-row justify-content-around flex-wrap">
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                        <div className="d-flex">
                            <img src="./assets/bitcoin.svg" alt="bitcoin" />
                        
                            <div className="d-flex flex-column  justify-content-center ">
                                <h3>Bitcoin</h3>
                                <p>19,003 USD</p>
                            </div>
                        </div>
                        <div className="criptoGraphic">
                            <img  src="./assets/grafico-cripto.jpg" alt="grafico cripto" />
                        </div>
                        
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                        <div className="d-flex">
                            <img src="./assets/ethereum.svg" alt="ethereum" />
                        
                            <div className="d-flex flex-column  justify-content-center ">
                                <h3>Ethereum</h3>
                                <p>1,273.20 USD</p>
                            </div>
                        </div>
                        <div className="criptoGraphic">
                            <img  src="./assets/grafico-cripto.jpg" alt="grafico cripto" />
                        </div>
                        
                    </div>
                    
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 criptoCard">
                        <div className="d-flex">
                            <img src="./assets/cardano.svg" alt="cardano" />
                        
                            <div className="d-flex flex-column  justify-content-center ">
                                <h3>Ethereum</h3>
                                <p>0,45 USD</p>
                            </div>
                        </div>
                        <div className="criptoGraphic">
                            <img  src="./assets/grafico-cripto.jpg" alt="grafico cripto" />
                        </div>
                        
                    </div>
        </div>
    );
}

