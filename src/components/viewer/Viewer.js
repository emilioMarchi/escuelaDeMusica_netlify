import React from 'react'
import './viewer.css'
export const Viewer = () => {
    return(
        <div className='viewer-container'
            style={{
                width:'100%',
                height:'100%',
                backgroundColor:'black',
                opacity: '65%',
                position: 'fixed',
                top:'0',
                left:'0',
                zIndex:100,
            }}
        >
            VIEWER
        </div>
    )
}