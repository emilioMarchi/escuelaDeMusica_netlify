import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/header/Header";
//views
import  InicioView  from "./views/Inicio";
import QHacemosView from "./views/QueHacemos";
import QSomosView from "./views/QuienesSomos";
import AgendaView from "./views/Agenda";
import CAyudarView from "./views/ComoAyudar";
import ContactoView from "./views/Contacto";
import GaleriaView from "./views/Galeria";
import NotFoundPage from "./views/NotFoundPage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<InicioView />}/>
        <Route path="/que-hacemos" element={<QHacemosView />}/>
        <Route path="/quienes-somos" element={<QSomosView />}/>
        <Route path="/galeria" element={<GaleriaView />}/>
        <Route path="/agenda" element={<AgendaView />}/>
        <Route path="/contacto" element={<ContactoView />}/>
        <Route path="/como-ayudar" element={<CAyudarView />}/>
        <Route path="/*" element={<NotFoundPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
