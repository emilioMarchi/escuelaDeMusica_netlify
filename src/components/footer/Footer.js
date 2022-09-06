import React, {useMemo, useEffect} from 'react' 

import './footer.css'
import './socialBar.css'
import Map from '../map/Map'

export default function Footer() {

    
    return(
        <div className='footer'>
            <div className='info'>
                
                
                <div className='info-contact'>
                    <div className='info'>
                        <h5>Email: email@gmail.com</h5>
                        <h5>Tel: 4-555-00-55</h5>
                        <h5>Direc: Calle 1154</h5>
                    </div>
                    
                </div>

            </div>
                
            <div className='map-conteiner'>
                <Map/>

            </div>
        </div>
    )
}