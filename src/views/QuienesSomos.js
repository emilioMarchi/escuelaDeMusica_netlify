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
                                    <h2>Quiénes somos</h2>
                                    <p>Un pilar fundamental para el funcionamiento de la escuela somos sus docentes y asistentes: estudiantes o docentes de música, músicos, vecinos del barrio y colaboradores: algunos nos encontramos todos los sábados por la mañana (por ahora) en el edificio del Centro de Día, de Villa del Parque, para acompañar al estudiantado en su desarrollo musical, que se materializa en la práctica instrumental o la iniciación musical para los más pequeños y pequeñas. <br/>
                                        </p>
                                    <p>
                                    Un tercer soporte, está conformado por entrañables amigos y amigas de todas partes, que colaboran con su trabajo dentro de la Asociación Civil, Escuela de Arte Barrial, y una extensa red de madrinas y padrinos, la Asociación de Ex-alumnas del Colegio Calvario de Santa Fe, la Fundación Padre Catena, la Vecinal de Villa del Parque, Cáritas Parroquial de Villa del Parque, Canticuénticos, León Gieco, y tantos y tantas organizaciones y personas que siempre nos acompañan en todo momento.
                                    </p>
                                    
                                </div>
                    
                            </div>
                            <Agend/>
                </div>
            </div>
                <Donation/>
            </>
        )
    
}
