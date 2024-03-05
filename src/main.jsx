import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Purchase from './Components/Purchase.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
