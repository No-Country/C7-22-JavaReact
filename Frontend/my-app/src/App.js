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
import TrabajaConNosotros from './components/UneteAlEquipo/TrabajaConNosotros';
import Comisiones from './components/Comisiones/Comisiones';
import Vacantes from './components/UneteAlEquipo/Vacantes';
import Perfil from './components/Perfil/Perfil';
import RegistroExitoso from './components/Perfil/RegistroExitoso';
import Calculadora from './components/Perfil/Calculadora.jsx';
import { CoinsProvider } from './context/CoinsContext';
import IngresoDinero from './components/Perfil/IngresoDinero';
import RetiroDinero from './components/Perfil/RetiroDinero';

export const  App =() => {
  return (
    <>
      <CoinsProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/TrabajaConNosotros' element={<TrabajaConNosotros/>}></Route>
              <Route path='/comisiones' element={<Comisiones/>}></Route>
              <Route path='/vacantes' element={<Vacantes/>}></Route>
              <Route path='/ayuda'element={<Ayuda/>}></Route>
              <Route path='/precios'element={<Precios/>}></Route>
             
              <Route path='/calculadora' element={<Calculadora/>}></Route>
              <Route path='/registroexitoso' element={<RegistroExitoso/>}></Route>
              <Route path='/iniciarsesion'element={<IniciarSesion/>}></Route>
              <Route path='/register'element={<CreaTuCuenta/>}></Route>
              <Route path='/plataforma'element={<PlataformaCripto/>}></Route>
              <Route path='/plataforma/ingresodinero'element={<IngresoDinero/>}></Route>
              <Route path='/plataforma/retirodinero'element={<RetiroDinero/>}></Route>
              <Route path='/plataforma/calculadora/:id'element={<Calculadora/>}></Route>
              <Route path='/plataforma/perfil' element={<Perfil/>}></Route>
            
          </Routes>
        <Footer/>
      </BrowserRouter>
      </CoinsProvider>
    </>
  );
}


