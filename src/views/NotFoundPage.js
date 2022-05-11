import React, {Component} from 'react'

import './NotFoundPage.css'

export default class NotFoundPage extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div className='not-found-view'>
                <div className='section-1 d-flex container'>
                    <div className='title col'>
                        <h1>404</h1>
                    </div>
                </div>
            </div>
        )
    }
}
