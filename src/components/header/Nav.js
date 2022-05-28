import React from 'react'
import {BrowserRouter as Router ,Link } from 'react-router-dom';
import './nav.css'

export default function Nav () {
    return(
        <Router>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/que-hacemos">Quiénes somos</Link>
                    </li>
                    <li>
                    <   Link to="/como-ayudar">Cómo colaborar</Link>
                    </li>
                    <li>
                        <Link to="/agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>

        </Router>
    )
}