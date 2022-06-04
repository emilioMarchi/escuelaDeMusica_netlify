import React from 'react' 

import AgendCarousel from './agendCarousel/AgendCarousel'
import NewCarousel from './newCarousel/NewCarousel'

export default function Agend () {
    return(
        <>
            <div className='agenda-slider col-4'>
                        <div className='agenda-title'>
                            <h2>Agenda</h2>
                        </div>
                        <div className='agenda-items'>
                            <AgendCarousel/>
                            <NewCarousel/>

                        </div>
                    </div>
        </>
    )
}