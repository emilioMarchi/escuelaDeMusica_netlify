import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './footer.css'
import './socialBar.css'
import Map from '../map/Map'

export default function Footer() {

    
    return(
        <div className='footer'>
            <div className='info'>
                
                
                <div className='info-contact'>
                    <div className='info' >
                        <a className='location-link' target='_blank' href={'https://www.google.com/maps/place/Escuela+de+M%C3%BAsica+Barrial/@-31.6308086,-60.7206793,21z/data=!4m5!3m4!1s0x95b5a9cd289e61e5:0x9be604c0a1c2de9a!8m2!3d-31.6308466!4d-60.7206772?hl=es-ES'}>
                            <FontAwesomeIcon  className='location-icon' icon={faLocationDot} />

                            <p>Ver en mapa</p>
                        </a>
                        <h5>escuelademusicabarrialsf@gmail.com</h5>
                        <h5>Padre Catena 4200 - Santa Fe - 3000 - Santa Fe</h5>

                        <div className='icons-contact-container'>
                                <div className='icons-contact'>
                                    <a href='https://www.instagram.com/escuelademusicabarrial/' title='Instagram' target='_blank'>
                                        <img src='img/icons/instagram.png' />
                                    </a>
                                    <a href='https://es-la.facebook.com/EscuelaDeMusicaBarrial/' title='Facebook' target='_blank'>
                                        <img src='img/icons/fb-white.png' />
                                    </a>
                                    
                                </div>
                        </div>
                    </div>
                    
                </div>

            </div>
                
            <div className='map-conteiner'>
                <Map/>

            </div>
        </div>
    )
}