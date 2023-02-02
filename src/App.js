import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import FicheLogement from './Pages/FicheLogement';
import Home from './Pages/Home';
import Error from './Pages/Error'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/fichelogement' element={<FicheLogement/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;