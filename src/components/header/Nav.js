import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css'

export default function Nav () {
    return(
        
            <div className='nav'>
                <ul>
                    <li>
                        <Link className='link' to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className='link' to="/que-hacemos">Quiénes somos</Link>
                    </li>
                    <li>
                    <   Link className='link' to="/como-ayudar">Cómo colaborar</Link>
                    </li>
                    <li>
                        <Link className='link' to="/agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link className='link' to="/contacto">Contacto</Link>
                    </li>
                </ul>
                
            </div>


    )
}