import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acai from './pages/Acai';
import Signo from './pages/signo';
import Carro from './pages/carro';
import Salario from './pages/salario';
import Temperatura from './pages/temperatura';
import Sorveteria from './pages/sorveteria';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
  <Routes>
   
      <Route path='/' element={<App />} />
      <Route path='/acai' element={<Acai />} />
      <Route path='/signo' element={<Signo />} />
      <Route path='/carro' element={<Carro />} />
      <Route path='/salario' element={<Salario />} />
      <Route path='/temperatura' element={<Temperatura />} />
      <Route path='/sorveteria' element={<Sorveteria />} />

  </Routes>
</BrowserRouter>
);