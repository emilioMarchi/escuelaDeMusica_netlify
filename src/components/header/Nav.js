import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './nav.css'

export default function Nav ({state, setNavState}) {


    return(
        
            <div className={state === false ? 'nav' : 'nav d-flex'}>
                <ul>
                    <li>
                        <Link onClick={()=>{setNavState(false);}} className='link' to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/quienes-somos">Quiénes somos</Link>
                    </li>
                    <li>
                    <   Link onClick={()=>{setNavState(false)}} className='link' to="/como-colaborar">Cómo colaborar</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/galeria">Galería</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/contacto">Contacto</Link>
                    </li>
                </ul>
                
            </div>


    )
}