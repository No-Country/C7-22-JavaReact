import './PlataformaCripto.css'
import { Header } from './Header/Header';
import { AsideProfile } from './AsideProfile/AsideProfile';
import { DineroDisponible } from './DineroDisponible/DineroDisponible';
import { MiPortafolio } from './MiPortafolio/MiPortafolio';
import { useAuth } from '../../../hooks/useAuth';
import axios from '../../../api/axios';

export const PlataformaCripto = () => {

    const {auth} = useAuth();
    const GETDATA_URL= 'users/register'

        axios.post(GETDATA_URL,auth?.data?.accessToken)
        .then(res => {
            console.log(res)
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
                    <DineroDisponible/>
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