import React, {Component} from 'react'

import './Inicio.css'

export default class InicioView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='inicio-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>Escuela de música barrial</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                    </div>
                    <div className='img-container col'>
                        <img src='./img/cuadrado.png' />
                        <img src='./img/cuadrado.png' />
                        <img src='./img/cuadrado.png' />
                    </div>
                </div>
                <article className='section-2 d-flex container'>
                    <div className='information-section col'>
                        <div className='item-section'>
                            <h2>Quiénes Somos</h2>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                            <a href='/quienes-somos'>Ver más</a>
                        </div>
                        <div className='item-section'>
                            <h2>Qué hacemos</h2>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                            <a href='/que-hacemos'>Ver más</a>
                        </div>
                    </div>
                    <div className='agenda-slider col-4'>
                        <div className='agenda-title'>
                            <h2>Agenda</h2>
                        </div>
                        <div className='agenda-items'>
                            <div>
                                <h4>Item agenda</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div>
                                <h4>Item agenda</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div>
                                <h4>Item agenda</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
