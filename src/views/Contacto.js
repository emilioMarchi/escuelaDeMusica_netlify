import React, {useState, useEffect} from 'react'

import './ComoAyudar.css'
import './Contacto.css'
import FormContact from '../components/formContact/FormContact' 

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
                    <div className='contact-content container'>
                        <div className='contact-form col'>
                            <h3>Dejanos un mensaje, pronto nos estaremos comunicando</h3>
                            <FormContact type={'contact'}/>
                        </div>
                        <div className='contact-redes col '>
                            <h3>Tambien nos podes encontrar en nuestras redes</h3>
                            <div>
                                <div className='contact-social'>
                                    <a href='https://www.instagram.com/escuelademusicabarrial/' title='Instagram' target='_blank'>
                                        <img src='img/icons/ig-black.png' />
                                    </a>
                                    <a href='https://es-la.facebook.com/EscuelaDeMusicaBarrial/' title='Facebook' target='_blank'>
                                        <img src='img/icons/fb-black.png' />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
