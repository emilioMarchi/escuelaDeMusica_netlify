import React from 'react' 

export default function GalleryItem ({url}) {
    return(
        <div className='gallery-item'>
            <img src={url} />
            
        </div>
    )
}