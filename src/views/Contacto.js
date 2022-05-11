import React, {Component} from 'react'

import './Contacto.css'

export default class ContactoView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='contacto-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>Contacto</h1>
                    </div>
                </div>
            </div>
        )
    }
}
