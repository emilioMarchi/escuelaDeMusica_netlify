import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'

import Article from '../components/article/Article'

import './Inicio.css'

export const InicioView = ()=>{
    useEffect(()=>{
        axios.get('http://localhost:8080/',{
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost/8080'
            }
        }).then(res=>{
            console.log(res.data)
        })
    },[])


    return(
        <div className='inicio-view'>
                        <div className='section-1  container'>
                            <div className='title col-sm'>
                                <h1>ESCUELA DE MÚSICA BARRIAL</h1>
                                <h3>Bienvenidos. Gracias por visitarnos e interesarte por nuestro trabajo. Aquí podrás conocer quiénes somos, nuestra historia, nuestros proyectos y si te parece, contactarnos para trabajar juntos.</h3>
                                <div className='title-button-container'>
                                    <a href='#information-section' ><p>Conocer más</p></a>
                                    <a href='/como-ayudar'><p>Cómo colaborar</p></a>
                                </div>
                            </div>
                            <div className='img-container col-sm'>
                                <img className='img' src='./img/portada-1.webp' />
                                <img className='img' src='./img/portada-2.jpeg' />
                                <img className='img' src='./img/portada-3.webp' />
                            </div>
                        </div>
                        <Article/>
                    </div>
    )
}