import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
export const Footer = () => {
    return (
    <div className="container-fluid">
        <div className="row contentFooter">
          <div className="col-md-3 logoFooter ">
            <Link to="/">
              <img src="../assets/logo.svg" alt="Logo CriptoAlgo" />
            </Link>
            
          </div>
          <div className="col-md-6 listFooter">
            <ul className="list ">
                <Link to="/Ayuda" className="text-decoration-none"><li>Ayuda</li></Link> 
                <Link to="/" className="text-decoration-none"><li>Home</li></Link> 
                <Link to="/precios" className="text-decoration-none"><li>Precios</li></Link> 
               <Link to="/TrabajaConNosotros" className="text-decoration-none"><li>Únete al equipo</li></Link> 
               <Link to="/Comisiones" className="text-decoration-none"><li>Comisiones</li></Link>
            </ul>
          </div>
          <div className="col-md-3 socialFooter">
            <div className="pb-4">
              <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                <img className="twitter" src="../assets/twitter-icono.svg" alt="twitter icono" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <img className="facebook" src="../assets/facebook-icono.svg" alt="facebook icono" />
              </a>
                
            </div>
            <div className="pb-4">
              <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                <img className="youtube" src="../assets/youtube-icono.svg" alt="youtube icono" />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                <img className="telegram"src="../assets/telegram-icono.svg" alt="telegram icono" />
              </a>
                
            </div>
            <div>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <img className="instagram" src="../assets/instagram-icono.svg" alt="instagram icono" />
              </a>
                
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

