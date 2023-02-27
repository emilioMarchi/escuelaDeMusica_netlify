import React, { useState, useContext } from 'react';
import { GalleryContext } from '../../context/galleryContext/GalleryContext'


const VideoItem = ({ id, url }) => {
  const [opacity, setOpacity] = useState(1);
  const [filterImg, setFilterImg] = useState('grayscale(80%)')
  const [fontSize, setFontSize] = useState(24)
  const [fontColor, setFontColor] = useState('rgb(238, 255, 253)')

  const [viewer, setViewer, galleryView, setGalleryView, 
    galleryList, setGalleryList, imgSelected, setImgSelected] = useContext(GalleryContext)

    
  const handleMouseEnter = () => {
    setFontSize(26)
    setOpacity(0.8);
    setFilterImg('grayscale(0%)')
    
  };

  const handleMouseLeave = () => {
    setOpacity(1);
    setFontSize(24)
    
  };

  return (
    <div className='card-item'
    key={id}
    id={id}
    style={{
      width: '350px',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor:'none',
      zIndex:'100',
    }}

      onClick={()=>{setViewer(true)}}
    >
    
      
      <iframe src={`${url}`}
        
        style={{
            width: '100%',
            height: '100%',
            cursor: 'none',
            zIndex:'0',
        }}
        title="YouTube video player" frameBorder="0" fs="1" 
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
         >
            
        </iframe>
        
          
                             
                             
                         
    </div>
  );
};

export default VideoItem;
