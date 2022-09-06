
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
import './Agend.css'

export default function Agend () {

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
                        <h5>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h5>
                    </div>

                </div>
        )
    }
    return(
        <div className='col-4 agend-slider'>
            <h2>Agenda</h2>
            <Carousel className='carousel-header' activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item className='carousel-item'>
                    <AgendItem/>
                </Carousel.Item>
                <Carousel.Item>
                    <AgendItem/>
                </Carousel.Item>
                <Carousel.Item>
                    <AgendItem/>
                </Carousel.Item>

            </Carousel>

        </div>
    )
}




