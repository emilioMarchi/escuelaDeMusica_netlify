import React, {useEffect} from 'react'

import Agend from '../components/agend/Agend'
import Donation from '../components/donation/Donation'
import './QuienesSomos.css'

export default function QSomosView (){

    useEffect(()=>{
        window.scroll(0,0)
    }, [])

        return(
            <>
            <div className='q-somos-view'>
                <div className='section-1 d-flex container q-somos-title'>
                
                </div>
            </div>
            <div className='q-somos '>
                <div className='container d-flex'>

                            <div  className='information-section  col'>
                                <div className='item-section'>
                                    <h2>Nuestra historia</h2>
                                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino...</p>
                                    
                                </div>
                                <div className='item-section'>
                                    <h2>Que hacemos</h2>
                                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino...</p>
                                    
                                </div>
                            </div>
                            <Agend/>
                </div>
            </div>
                <Donation/>
            </>
        )
    
}
