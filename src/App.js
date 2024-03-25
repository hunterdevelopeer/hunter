/* global dataLayer */
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LFCKZTFPJT';
    script.async = true;
    document.head.appendChild(script);

    dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LFCKZTFPJT');

    return () => {
      // Limpar script se o componente for desmontado
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;