import React from 'react' 
import './Agend.css'

export default function Agend () {


    const AgendItem = () => {
        return(
            <div className='agend-item'>
                <h2>Title</h2>
                <h5>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h5>
            </div>
        )
    }
    return(
        <>
            <div className='agend-slider col-4'>
                        <div className='agend-title'>
                            <h2>Agenda / Novedades</h2>
                        </div>
                        <div className='agend-items'>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
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
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
        </>
    )
}