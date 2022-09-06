import React from 'react';

import Agend from '../agend/Agend';

export default function Article(){
    return(
        <div id='information-section' className='section-2 d-flex container'>
                    
                    <div  className='information-section col'>
                        <div className='item-section'>
                            <h2>Quiénes somos</h2>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino...</p>
                            <a href='/quienes-somos'>Ver más</a>
                        </div>
                    </div>
                    <Agend/>
                    
        </div>
    )
}