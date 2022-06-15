import React from 'react' 

import AgendItem from '../agendItem/AgendItem'

export default function AgendCarousel () {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <AgendItem />
                    </div>
                    <div class="carousel-item">
                        <AgendItem />
                    </div>
                    <div class="carousel-item">
                        <AgendItem />
                    </div>
                </div>
            </div>
        </div>
    )
}