import React from 'react' 

import './footer.css'

export default function Footer() {
    return(
        <div className='footer '>
            <div className='footer-nav col'>
                <ul>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>
                    <li>
                        <a href='/quienes-somos'>¿Quiénes somos?</a>
                    </li>
                    <li>
                        <a href='/como-ayudar'>¿Cómo colaborar?</a>
                    </li>
                    <li>
                        <a href='/agenda'>Agenda</a>
                    </li>
                    <li>
                        <a href='/contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='info-contact col-6'>
                <div className='info col'>informacion de contacto</div>
                <div className='map col'>map</div>
            </div>
        </div>
    )
}