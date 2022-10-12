
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ayuda from './components/Ayuda/Ayuda';
import { Precios } from './components/Precios/Precios';
import { PlataformaCripto } from './components/IniciarSesion/PlataformaCripto/PlataformaCripto';
import NavBar from './components/NavBar/NavBar.jsx';
import { IniciarSesion } from './components/IniciarSesion/IniciarSesion';
import { CreaTuCuenta } from './components/CreaTuCuenta/CreaTuCuenta';
export const  App =() => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/ayuda'element={<Ayuda/>}></Route>
              <Route path='/precios'element={<Precios/>}></Route>
              <Route path='/iniciarsesion'element={<IniciarSesion/>}></Route>
              <Route path='/register'element={<CreaTuCuenta/>}></Route>
              <Route path='/plataforma'element={<PlataformaCripto/>}></Route>

              
          
          </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  );
}


