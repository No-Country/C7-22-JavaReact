import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
export const  App =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  );
}

