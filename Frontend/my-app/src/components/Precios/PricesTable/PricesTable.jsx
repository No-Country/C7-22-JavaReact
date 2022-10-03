import './PricesTable.css'
import { Search } from '../Search/Search';
import { PricesTableResponsive } from './PricesTableResponsive/PricesTableResponsive';
export const PricesTable = () => {
    return (
        <div className="container-fluid pricesTableContainer">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 firstContentTable">
                <div className="buttonsTable">
                    <button className="btn btn-dark">Todas</button>
                    <button className="btn btn-light">Stablecoins</button>
                </div>
                <Search/>
              </div>
            </div>
            <table className="table table-hover responsiveTablePrices">
              <thead>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Volumen</th>
                  <th>Variacion</th>
                  <th>Market cap</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img className="criptoCards" src="./assets/bitcoin.svg" alt="bitcoin" /></td>
                  <td><p>Bitcoin</p></td>
                  <td>$ 30,000</td>
                  <td>$ 1,000,000</td>
                  <td>+ 0.52%</td>
                  <td>$ 1,000,000,000</td>
                  <td><button className="btn btn-dark">Comprar</button></td>
                </tr>
                <tr className="table-active">
                  <td><img className="criptoCards" src="./assets/ethereum.svg" alt="ethereum" /></td>
                  <td><p>Ethereum</p></td>
                  <td>$ 30,000</td>
                  <td>$ 1,000,000</td>
                  <td>+ 0.52%</td>
                  <td>$ 1,000,000,000</td>
                  <td><button className="btn btn-dark">Comprar</button></td>
                </tr>
                <tr className="table-success">
                  <td><img className="criptoCards" src="./assets/cardano.svg" alt="cardano" /></td>
                  <td><p>Cardano</p></td>
                  <td>$ 30,000</td>
                  <td>$ 1,000,000</td>
                  <td>+ 0.52%</td>
                  <td>$ 1,000,000,000</td>
                  <td><button className="btn btn-dark">Comprar</button></td>
                </tr>
              </tbody>
            </table>
            <PricesTableResponsive/>
          </div>
          
        </div>
        
      </div>
    );
}

