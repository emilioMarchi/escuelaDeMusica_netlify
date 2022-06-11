import React from 'react' 

import './footer.css'
import socialBar from '../socialBar/socialBar'

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
            <div>
                <socialBar/>
            </div>
            <div className='info-contact col-6'>
                <div className='info col'>
                    <h5>Email: email@gmail.com</h5>
                    <h5>Tel: 4-555-00-55</h5>
                    <h5>Direc: Calle 1154</h5>
                </div>
                <div className='map col'>map</div>
            </div>
        </div>
    )
}