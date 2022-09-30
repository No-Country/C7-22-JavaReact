import './Precios.css'
import { MainCriptos } from '../MainCriptos/MainCriptos';
import { PricesTable } from './PricesTable/PricesTable';
export const Precios = () => {
    return (
        <div className="pricesContainer">
            <div className="pricesTitle">
                <p>
                    Precios y gráficos de datos sobre criptomonedas hoy
                </p>
            </div>
            <MainCriptos/>
            <PricesTable/>
        </div>
    );
}

