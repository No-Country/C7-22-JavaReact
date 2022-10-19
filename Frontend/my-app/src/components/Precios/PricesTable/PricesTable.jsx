import './PricesTable.css'
import { Search } from '../Search/Search';
import { PricesTableResponsive } from './PricesTableResponsive/PricesTableResponsive';
import { useContext, useState} from 'react';
import { CoinsContext } from '../../../context/CoinsContext';
import { CoinsRows } from './CoinsRows';

export const PricesTable = () => {
    const {coins} =useContext(CoinsContext)
    console.log(coins)

    const [search, setSearch] = useState("");
    console.log(search)


    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }

    const titles = ["", "","Nombre", "Precio", "Variación", "24h Volumen", ""]
    
    let filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search))

   

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
                <Search handleSearch={handleSearch}/>
              </div>
            </div>
            <table className="table table-hover responsiveTablePrices">
              <thead>
                <tr>
                
                  {titles.map((title)=>(
                    <th>{title}</th>
                  ))}
                
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin,index)=>(
                  <CoinsRows coin={coin} key={index}/>
                ))}
        
              </tbody>
            </table>
            <PricesTableResponsive coins={coins}/>
          </div>
          
        </div>
        
      </div>
    );
}

