import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


//Components

//views
import  {InicioView}  from "./views/Inicio";
import QHacemosView from "./views/QueHacemos";
import QSomosView from "./views/QuienesSomos";
import AgendaView from "./views/Agenda";
import CAyudarView from "./views/ComoAyudar";
import ContactoView from "./views/Contacto";
import GaleriaView from "./views/Galeria";
import NotFoundPage from "./views/NotFoundPage";
import Admin from "./views/Admin";

import './App.css';



function App() {

  const basename = process.env.REACT_APP_NAME || null

  return (
    <div >
        <Router basename={basename}>
          <Header/>
            <Routes>
                <Route path="/" element={<InicioView />}/>
                <Route path="/que-hacemos" element={<QHacemosView />}/>
                <Route path="/quienes-somos" element={<QSomosView />}/>
                <Route path="/galeria" element={<GaleriaView />}/>
                <Route path="/agenda" element={<AgendaView />}/>
                <Route path="/contacto" element={<ContactoView />}/>
                <Route path="/como-colaborar" element={<CAyudarView />}/>
                <Route path="/*" element={<NotFoundPage />}/>
            </Routes>
          <Footer/>
        </Router>
          
      </div>
  );
}

export default App;
