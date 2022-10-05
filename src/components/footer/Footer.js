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
                        
                        <h5>Padre Catena 4200 - Santa Fe - 3000 - Santa Fe</h5>
                        <h5>escuelademusicabarrialsf@gmail.com</h5>
                        <h5>Tel: 4-555-00-55</h5>
                    </div>
                    
                </div>

            </div>
                
            <div className='map-conteiner'>
                <Map/>

            </div>
        </div>
    )
}