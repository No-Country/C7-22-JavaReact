import './PlataformaCripto.css'
import { Header } from './Header/Header';
import { AsideProfile } from './AsideProfile/AsideProfile';
import { DineroDisponible } from './DineroDisponible/DineroDisponible';
import { MiPortafolio } from './MiPortafolio/MiPortafolio';
import axios from '../../../api/axios';
import { useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


export const PlataformaCripto = () => {
    const {auth} = useAuth();
    const navigate = useNavigate()

    const token = auth

    useEffect(() => {
        

       if (!localStorage.getItem("token")) {
        navigate("/iniciarsesion")
       }
    }, [navigate]);


    

    const GETDATA_URL= 'users/me'

    

    axios.get(GETDATA_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        console.log("hola",res)
    })

    .catch(()=>{
        console.log("No Server Response")
    })

    return (
        <div >
           <Header/>
           <div className="platformContainer">
                <AsideProfile/>
                <div className="mainPlatform">
                    <DineroDisponible />
                    <MiPortafolio/>
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