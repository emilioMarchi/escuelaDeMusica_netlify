import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
import Donation from '../components/donation/Donation'
import { Gallery } from '../components/gallery/Gallery'
import Article from '../components/article/Article'

import './Inicio.css'

export const InicioView = ()=>{
    useEffect(()=>{
        window.scroll(0,0)
    }, [])
    return(
        <div className='inicio-view'>
                        <div className='section-1  container'>
                            <div className='title col-sm'>
                                <div className='logo-title'>
                                    <img className='logo' src='./img/logo.png' />
                                    <h1>Escuela de<br/> música barrial</h1>

                                </div>
                                <div className='title-button-container'>
                                    <a href='#information-section' ><p>Conocer más</p></a>
                                    <a href='/como-colaborar'><p>Cómo colaborar</p></a>
                                </div>
                            </div>
                            <div className='img-container col-sm'>
                                
                            </div>
                        </div>
                        <div className='inicio-portada'>
                                <div className='img-content'>

                                </div>
                                <h3>Bienvenidos. Gracias por visitarnos e interesarte por nuestro trabajo. Aquí podrás conocer quiénes somos, nuestra historia, nuestros proyectos y si te parece, contactarnos para trabajar juntos.</h3>                            
                        </div>
                        <Article/>
                        <Gallery/>
                        <Donation/>
                    </div>
    )
}