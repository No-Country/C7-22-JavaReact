import './MiPortafolio.css'
import { useContext } from 'react';
import { CoinsContext } from '../../../../context/CoinsContext';

export const MiPortafolio = ({wallet}) => {

    const {coins} = useContext(CoinsContext)
    const criptos = [wallet.btcBalance,
        wallet.ethBalance,
        wallet.usdtBalance,
        wallet.bnbBalance,
        wallet.usdcBalance,
        wallet.busdBalance, 
        wallet.adaBalance]
    
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
                        <img className="criptoCards" src={coin.image} alt="cripto" />
                        <p>{coin.name}</p>
                    </div>
                    <div>{coin.current_price}</div>

                    
                </div>
            ))}
            {criptos.map((cripto,index)=>(<>
                <div key={index}>
                    <div>{cripto}</div>
                    <div>1000</div>
                </div>
                
            </>))}
                    
           
        </div>
    );
}

