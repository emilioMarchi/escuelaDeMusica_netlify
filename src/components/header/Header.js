import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.css'

import Nav from './Nav'

export default function Header () {

    const [navState, setNavState] = useState(false)

    const handlerNavState = () => {
        if(navState === false) {
            setNavState(true)

        } else {
            setNavState(false)

        }
    }

    return(
        <div className='header'>
            <a className='logo'>
                <img src='img/logo.png' />
            </a>
            <Nav state={navState} function={setNavState} />
            <FontAwesomeIcon onClick={()=>{handlerNavState(); }} className='nav-bar-icon' icon={faBars} />
        </div>
    )
}