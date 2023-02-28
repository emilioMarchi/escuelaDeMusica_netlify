import React, {useState, useEffect} from 'react'

import './ComoAyudar.css'
import Payments from '../components/Payments/Payments'
import FormContact from '../components/formContact/FormContact'


export default function CAyudarView (){
    
  
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
                <div>
                    <div className='donation-container'>
                        <div className='video-container'>
                            <h2>¿Querés saber cómo colaborar?</h2>
                            <h3>A continuación te dejamos un video explicativo acerca de cómo podes colaborar con nosotros</h3>
                            <div className='frame'>
                                <iframe src={``}
                                    
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'none',
                                        zIndex:'0',
                                    }}
                                    title="YouTube video player" frameBorder="0" fs="1" 
                                    allowfullscreen="allowfullscreen"
                                    mozallowfullscreen="mozallowfullscreen" 
                                    msallowfullscreen="msallowfullscreen" 
                                    oallowfullscreen="oallowfullscreen" 
                                    webkitallowfullscreen="webkitallowfullscreen"
                                >
                                        
                                </iframe>
                                
                            </div>
                        </div>
                        <div className='payment-options-container'>
                            <h2>Las opciones para colaborar con nosotros son la siguientes</h2>
                            <Payments /> 
                            <div className='transfer-info-container'>
                                <h3>Para colaborar mediante una transferencia bancaria podes utilizar los siguientes datos</h3>
                                <div className='transfer-info'>

                                    <h3>Cuenta. 1/10693409 – Cuenta Cte especial Pjur – Multimoneda</h3>
                                    <h3>Titular: Asociación Civil Escuela – CUIT N.º 30-71507183-1</h3>
                                    <h3>CBU Pesos: 4260001/9-0020010693409/2</h3>
                                    <h3>CBU U$S:    4260001/9-0022010693409/0</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
}
