import './MiPortafolio.css'
export const MiPortafolio = () => {
    return (
        <div className="portfolioContainer">
            <div className="titlesPortfolio">
                <div></div>
                <div>Precio</div>
                <div>Unidades</div>
                <div>Promedio</div>
                <div>Valor</div>
            </div>
            <div className="criptosPortfolio">
                <div className="d-flex align-items-center">
                    <img className="criptoCards" src="./assets/bitcoin.svg" alt="bitcoin" />
                    <p>Bitcoin</p>
                </div>
                <div>$ 10,000</div>
                <div>1</div>
                <div>500</div>
                <div>$ 1,000</div>
            </div>
           
        </div>
    );
}

