import { Link } from 'react-router-dom';
import './Footer.css'
export const Footer = () => {
    return (
    <div className="container-fluid">
        <div className="row contentFooter">
          <div className="col-md-3 logoFooter ">
            <img src="../assets/logo.svg" alt="Logo CriptoAlgo" />
          </div>
          <div className="col-md-6 listFooter">
            <ul className="list ">
                <Link to="/Ayuda"><li>Ayuda</li></Link> 
                <Link to="/"><li>Home</li></Link> 
                <Link to="/"><li>Precios</li></Link> 
               <Link to="/TrabajaConNosotros"><li>Únete al equipo</li></Link> 
               <Link to="/Comisiones"><li>Comisiones</li></Link>
            </ul>
          </div>
          <div className="col-md-3 socialFooter">
            <div className="pb-4">
                <img className="twitter" src="../assets/twitter-icono.svg" alt="twitter icono" />
                <img className="facebook" src="../assets/facebook-icono.svg" alt="facebook icono" />
            </div>
            <div className="pb-4">
                <img className="youtube" src="../assets/youtube-icono.svg" alt="youtube icono" />
                <img className="telegram"src="../assets/telegram-icono.svg" alt="telegram icono" />
            </div>
            <div>
                <img className="instagram" src="../assets/instagram-icono.svg" alt="instagram icono" />
            </div>
          </div>
        </div>
            
            
        <div className="row copyright">
            <div className="col-md-12 py-3">
                Copyright © 2022 CriptoAlgo - Todos los derechos reservados
            </div>
        </div>
    </div>
    );
}

