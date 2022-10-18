import { createContext, useState, useEffect} from "react";
import axios from "../api/axios";

export const CoinsContext = createContext()
export const CoinsProvider = (props) => {
    
    const [coins, setCoins] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Ctether%2Cusd-coin%2Cbinance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        console.log(res.data)
        setCoins(res.data)
    }

    useEffect(() => {
      getData()
    }, []);

    return (
        <>
            <CoinsContext.Provider value = {{coins}}>
                {props.children}
            </CoinsContext.Provider>
        </>
    );
}

