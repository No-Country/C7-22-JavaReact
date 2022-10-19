import './MiPortafolio.css'
import { useContext } from 'react';
import { CoinsContext } from '../../../../context/CoinsContext';

export const MiPortafolio = () => {

    const {coins} = useContext(CoinsContext)

    const titles = ["", "Precio", "Unidades", "Valor" ]

    return (
        <div className="portfolioContainer">
            <div className="titlesPortfolio">
                {titles.map((title)=>(
                    <div>{title}</div>
                  ))}
                
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

