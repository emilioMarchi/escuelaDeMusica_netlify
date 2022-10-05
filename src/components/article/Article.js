import React from 'react';

import Agend from '../agend/Agend';

export default function Article(){
    return(
        <div id='information-section' className='section-2 d-flex container'>
                    
                    <div  className='information-section col'>
                        <div className='item-section'>
                            <h2>Nuestro propósito: acercar oportunidades a través de la música</h2>
                            <p>La escuela de música barrial es un colectivo con un propósito en común: acercar oportunidades a través de la música. <br/> La razón de ser de la escuela, es su estudiantado, conformado por niñas, niños y adolescentes de Villa del Parque, donde se gestó, y en donde está funcionando desde entonces. También recibe aspirantes de barrios vecinos, del cordón oeste de nuestra ciudad: principalmente aquellas y aquellos a los que se les dificulta acceder al estudio de la música popular en otros centros educativos especializados oficiales o privados, por razones de distancia geográfica, social o económica...
                            </p>
                            <a href='/quienes-somos'>Ver más</a>
                        </div>
                    </div>
                    <Agend/>
                    
        </div>
    )
}