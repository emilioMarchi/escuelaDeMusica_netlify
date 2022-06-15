import React, {useMemo, useEffect} from 'react' 
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import './footer.css'
import SocialBar from './socialBar/SocialBar''
import {credentials} from '../../credentials'

export default function Footer() {
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyDgBV7FsYzoXGjYVOzg_zAG4YIS19KOE0I"
    })

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
            <SocialBar/>
            <h2>socialbar</h2>
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