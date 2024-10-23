import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; 

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Vista no existente</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

