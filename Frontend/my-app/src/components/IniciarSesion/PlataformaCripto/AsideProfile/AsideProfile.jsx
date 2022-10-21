import './AsideProfile.css'
import { Link } from 'react-router-dom';
 
export const AsideProfile = ({user}) => {
    return (
        <aside className="ps-5">
            <div className="infoAsideProfile">
                <h2>{user.firstName + " "+ user.lastName}</h2>
                <img src="./assets/default-profile.svg" alt="Imagen de perfil" />
                <Link to="/plataforma/perfil">
                    <p>Tu perfil</p>
                </Link>
                
            </div>
            <Link to="/ayuda">
                <div className="help"><p>Centro de ayuda</p> </div>
            </Link>
            
        </aside>
    );
}

