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

