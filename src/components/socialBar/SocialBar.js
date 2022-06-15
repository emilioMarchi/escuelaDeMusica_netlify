import React from 'react'

import './socialBar.css'

export default function SocialBar() {
    return(
        <div className='social-bar'>
            
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
    )
}