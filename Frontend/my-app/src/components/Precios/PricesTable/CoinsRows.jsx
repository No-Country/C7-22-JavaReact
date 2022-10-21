import React from 'react';
import { Link } from 'react-router-dom';

export const CoinsRows = ({coin,index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><img className="criptoCards" src={coin.image} alt="imagen-cripto" /></td>
            <td>
                {coin.name}
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>$ {coin.current_price}</td>
            <td className={coin.price_change_percentage_24h>0?"text-success":"text-danger"}>{coin.price_change_percentage_24h} %</td>
            <td>$ {coin.total_volume}</td>
            <td> 
                <Link to={`/plataforma/calculadora/${coin.id}`}>
                    <button className="btn btn-dark">Comprar</button>
                </Link>
            </td>
        </tr>
    );
}

