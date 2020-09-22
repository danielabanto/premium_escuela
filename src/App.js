import React from 'react';
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import Somos from './components/Somos'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'

function App() {
  return (
      <div className="container_full">
        <Header />
        <div className="container_page">
          <Hero />
          <Somos />
          <Servicios />
          <Contacto />
        </div>
        <Footer />
      </div>
  );
}

export default App;
