import React, {useEffect} from 'react'

import './ComoAyudar.css'
import './Agenda.css'


export default function ContactoView (){

    useEffect(()=>{
        window.scroll(0,0)
    }, [])

    const AgendItem = () => {
        return(
            <div className='agend-item'>
                <div className='agend-date'>
                    <div className='agend-day'>
                        <h3>7 Sep, 2022</h3>
                    </div>
                    
                </div>
                    <div>
                        <h2>Title</h2>
                        <h5>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h5>
                    </div>

                </div>
        )
    }
    
  
        return(
            <div className='c-ayudar-view'>
                <div className='q-somos-view'>
                    <div className='section-1 d-flex container q-somos-title'>
                      
                    </div>
                </div>
                <div className='agend-container'>
                    <div className='agend-title'>
                        <h2>Agenda</h2>
                        <h3>Aca vas a poder encontrar nuestra agenda de actividades y novedades</h3>
                    </div>
                    <div className='items-container container'>
                        <AgendItem/>
                        <AgendItem/>
                        <AgendItem/>
                        <AgendItem/>
                        <AgendItem/>
                    </div>
                </div>
            </div>
        )
}
