import React from 'react' 

export default function Agend () {
    return(
        <>
            <div className='agenda-slider col-4'>
                        <div className='agenda-title'>
                            <h2>Agenda</h2>
                        </div>
                        <div className='agenda-items'>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <h2>algo</h2>
                                    </div>
                                    <div class="carousel-item">
                                        <h2>algo</h2>                                    
                                    </div>
                                    <div class="carousel-item">
                                        <h2>algo</h2>                                    
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>

                        </div>
                    </div>
        </>
    )
}