import React, {useState, useEffect} from 'react'

import './ComoAyudar.css'
import './Contacto.css'

export default function ContactoView (){
    
   
    useEffect(()=>{
        window.scroll(0,0)
    }, [])
        return(
            <div className='c-ayudar-view'>
                <div className='q-somos-view'>
                    <div className='section-1 d-flex container q-somos-title'>
                        <div className='title col'>
                        </div>
                    </div>
                </div>
                <div class='contact-section container'>
                    <h2>¿Queres comunicarte con nosotros?</h2>
                    <div>
                        <div>
                            
                        </div>
                        <div>form</div>
                    </div>
                </div>
            </div>
        )
}
