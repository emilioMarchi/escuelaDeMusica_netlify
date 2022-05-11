import React, {Component} from 'react'

import './Galeria.css'

export default class GaleriaView extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='galeria-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>Galeria</h1>
                    </div>
                </div>
            </div>
        )
    }
}
