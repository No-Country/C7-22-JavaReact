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
        
            {coins.map((coin,index)=>(
                <div className="criptosPortfolio" key={index}>
                    <div className="d-flex align-items-center">
                        <img className="criptoCards" src={coin.image} alt="bitcoin" />
                        <p>{coin.name}</p>
                    </div>
                    <div>{coin.current_price}</div>
                    <div>1</div>
                    <div>$ 1,000</div>
                </div>
            ))}


           
        </div>
    );
}

