import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.css'

import Nav from './Nav'

export default function Header () {
    return(
        <div className='header'>
            <Nav/>
            <FontAwesomeIcon className='nav-bar-icon' icon={faBars} />
        </div>
    )
}