import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acai from './pages/Acai';
import Signo from './pages/signo';
import Sorveteria from './pages/sorveteria';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
  <Routes>
   
      <Route path='/' element={<App />} />
      <Route path='/acai' element={<Acai />} />
      <Route path='/signo' element={<Signo />} />
      <Route path='/sorveteria' element={<Sorveteria />} />

  </Routes>
</BrowserRouter>
);