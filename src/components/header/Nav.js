import React from 'react'

import './nav.css'

export default function Nav () {
    return(
        <div className='nav'>
            <ul>
                <li>
                    <a href='/'>Inicio</a>
                </li>
                <li>
                    <a href='/quienes-somos'>¿Quiénes somos?</a>
                </li>
                <li>
                    <a href='/como-ayudar'>¿Cómo ayudar?</a>
                </li>
                <li>
                    <a href='/agenda'>Agenda</a>
                </li>
                <li>
                    <a href='/contacto'>Contacto</a>
                </li>
            </ul>
        </div>
    )
}