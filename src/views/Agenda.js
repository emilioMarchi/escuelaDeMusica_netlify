import React, {Component} from 'react'

import './Agenda.css'

export default class ContactoView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='agenda-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>Agenda</h1>
                    </div>
                </div>
            </div>
        )
    }
}
