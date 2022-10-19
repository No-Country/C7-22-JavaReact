import './PricesTableResponsive.css'
import { Link } from 'react-router-dom';
export const PricesTableResponsive = ({coins}) => {
    return (
        <div className="accordion pricesTableResponsive">

        {coins.map((coin,index)=>(
            <div className="accordion-item" key={index}>
            <div className="accordion-header" id="headingOne">
            <button
                className="accordion-button buttonAccordion"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                <div className="d-flex justify-content-between">
                    <div className="titlePricesResponsive">
                        <img className="criptoCards" src={coin.image} alt="bitcoin" />
                        <h2>{coin.name}</h2>
                    </div>
                    <div className="infoPricesResponsive">
                        <p>{coin.current_price} USD</p>
                        <p className={coin.price_change_percentage_24h>0?"text-success":"text-danger"}>{coin.price_change_percentage_24h} %</p>
                    </div>
                </div>
            </button>
            </div>
            <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body">
                <div className="d-flex justify-content-between">
                    <p>
                        Volumen:
                    </p>
                    <p>
                        $ {coin.total_volume}
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>
                        Market cap:
                    </p>
                    <p>
                        $ {coin.market_cap}
                    </p>
                </div>
                <Link to="/plataforma">
                    <button className="btn btn-dark">Comprar</button>
                </Link>
                
            </div>
            </div>
            </div>
        ))}
       
        </div>
    );
}

