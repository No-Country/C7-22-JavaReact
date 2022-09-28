
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ayuda from './components/Ayuda/Ayuda';
import NavBar from './components/NavBar/NavBar.jsx';
export const  App =() => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            
              <Route path='/ayuda'element={<Ayuda/>}></Route>
              <Route path='/' element={<Home/>}></Route>
          
          </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  );
}


