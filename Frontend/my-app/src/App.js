import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Ayuda from './components/Ayuda/Ayuda';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<NavBar/>}></Route>
          <Route path='/ayuda'element={<Ayuda/>}></Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
