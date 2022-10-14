import './PlataformaCripto.css'
import { Header } from './Header/Header';
import { AsideProfile } from './AsideProfile/AsideProfile';
import { DineroDisponible } from './DineroDisponible/DineroDisponible';
import { MiPortafolio } from './MiPortafolio/MiPortafolio';
export const PlataformaCripto = () => {
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
        "adaBalance": 0.0 */