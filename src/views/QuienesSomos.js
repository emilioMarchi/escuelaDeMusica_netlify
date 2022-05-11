import React, {Component} from 'react'

import './QuienesSomos.css'

export default class QSomosView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='q-somos-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>¿Quienes somos?</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                    </div>
                </div>
            </div>
        )
    }
}
