import './PlataformaCripto.css'
import { Header } from './Header/Header';
import { AsideProfile } from './AsideProfile/AsideProfile';
import { DineroDisponible } from './DineroDisponible/DineroDisponible';
import { MiPortafolio } from './MiPortafolio/MiPortafolio';
import axios from '../../../api/axios';
import { useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


export const PlataformaCripto = () => {
    const {auth} = useAuth();
    const [user, setUser] = useState("");
    const [wallet, setWallet] = useState("");

    const navigate = useNavigate()

    const token = auth

    useEffect(() => {
        

       if (!localStorage.getItem("token")) {
        navigate("/iniciarsesion")
       }
    }, [navigate]);


    

    

    useEffect(() => {

        const GETDATA_URL= 'users/me'

        axios.get(GETDATA_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setUser(res?.data)
    
        })
    
        .catch(()=>{
            console.log("No Server Response")
        })
    
    }, [token]);

   
    

    useEffect(() => {

        const GETWALLET_URL= 'wallet/me'

        axios.get(GETWALLET_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setWallet(res?.data)
    
        })
    
        .catch(()=>{
            console.log("No Server Response")
        })
    }, [token]);

    


    return (
        <div >
           <Header/>
           <div className="platformContainer">
                <AsideProfile user={user}/>
                <div className="mainPlatform">
                    <DineroDisponible wallet={wallet} />
                    <MiPortafolio wallet={wallet}/>
                </div>
           </div>
           
        </div>
    );
}

/*"usdBalance": 0.0,
        "argpesosBalance": 0.0,
        "usdtBalance": 0.0,
        "usdcBalance": 0.0,
        "busdBalance": 0.0,
        "btcBalance": 0.0,
        "ethBalance": 0.0,
        "bnbalance": 0.0,
        "adaBalance": 0.0 
        bitcoin,ethereum,binancecoin,cardano,theter,usdcoin,binanceusd*/

/*{
    "ownerId": 1,
    "usdBalance": 0.0,
    "usdtBalance": 0.0,
    "usdcBalance": 0.0,
    "busdBalance": 0.0,
    "btcBalance": 0.0,
    "ethBalance": 0.0,
    "bnbBalance": 0.0,
    "adaBalance": 0.0
} */

/*{
    "firstName": "Karem",
    "lastName": "Chaparro",
    "email": "k@gmail.com"
} */