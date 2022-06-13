import React from 'react' 

import './footer.css'
import SocialBar from '../socialBar/SocialBar'

export default function Footer() {
    return(
        <div className='footer '>
            <SocialBar/>
            <div className='info-contact col-6'>
                <div className='info'>
                    <h5>Email: email@gmail.com</h5>
                    <h5>Tel: 4-555-00-55</h5>
                    <h5>Direc: Calle 1154</h5>
                </div>
                <div className='map'>map</div>
            </div>
        </div>
    )
}