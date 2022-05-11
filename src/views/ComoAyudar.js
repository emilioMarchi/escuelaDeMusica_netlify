import React, {Component} from 'react'

import './ComoAyudar.css'

export default class ContactoView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='c-ayudar-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>¿Cómo ayudar?</h1>
                    </div>
                </div>
            </div>
        )
    }
}
