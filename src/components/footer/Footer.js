import React, {useMemo, useEffect} from 'react' 
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import './footer.css'
import './socialBar.css'

export default function Footer() {

    const Map = () => {
        const center = useMemo(() => ({lat:-31.6308448, lng:-60.7228647}), [])
        return(
            <GoogleMap
                zoom={15}
                center={center}
                mapContainerClassName='map-container'
            >
                <Marker position={center} />
            </GoogleMap>
        )
    }
    return(
        <div className='footer'>
            <div className='redes-bar'>
        
                <ul>
                    <li>
                        <a href='https://www.facebook.com' target='_blank'>
                            <img className='icon' src='./img/icons/fb-white.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com' target='_blank'>
                            <img className='icon' src='./img/icons/instagram.png'/>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className='info-contact col-6'>
                <div className='info'>
                    <h5>Email: email@gmail.com</h5>
                    <h5>Tel: 4-555-00-55</h5>
                    <h5>Direc: Calle 1154</h5>
                </div>
                
            </div>
        </div>
    )
}