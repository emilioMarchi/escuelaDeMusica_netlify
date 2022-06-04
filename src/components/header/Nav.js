import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './nav.css'

export default function Nav ({state}) {

    const [navState, setNavState] = useState(state)

    useEffect(()=>{
        console.log(state)
    }, [])

    return(
        
            <div className={navState === false ? 'nav' : 'nav d-flex'}>
                <ul>
                    <li>
                        <Link onClick={()=>{setNavState(false); console.log('ok')}} className='link' to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/quienes-somos">Quiénes somos</Link>
                    </li>
                    <li>
                    <   Link onClick={()=>{setNavState(false)}} className='link' to="/como-ayudar">Cómo colaborar</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setNavState(false)}} className='link' to="/contacto">Contacto</Link>
                    </li>
                </ul>
                
            </div>


    )
}