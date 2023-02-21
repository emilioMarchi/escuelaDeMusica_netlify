import React, { useState, useContext } from 'react';
import './cardItem.css'
import { GalleryContext } from '../../context/galleryContext/GalleryContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const CardItem = ({ id, imageUrl }) => {
  const [opacity, setOpacity] = useState(1);
  const [filterImg, setFilterImg] = useState('grayscale(80%)')
  const [fontSize, setFontSize] = useState(24)
  const [fontColor, setFontColor] = useState('rgb(238, 255, 253)')
  

  const [viewer, setViewer, galleryView, setGalleryView, 
    galleryList, setGalleryList, imgSelected, setImgSelected] = useContext(GalleryContext)

    
  const handleMouseEnter = () => {
    setFontSize(28)
    setFontColor('turquoise')
    setOpacity(0.8);
    setFilterImg('grayscale(0%)')
    
  };

  const handleMouseLeave = () => {
    setOpacity(1);
    setFontSize(24)
    setFontColor('rgb(238, 255, 253)')
    
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
      cursor:'pointer',
    }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e)=>{

        setViewer(true)
        setImgSelected(id)
        
      }}
      
    >
      
    <FontAwesomeIcon icon={faImage}
        style={{ 
        cursor:'pointer', fontWeight: '700', zIndex: '50',
        position: 'absolute', fontSize:`${fontSize}`, color:`${fontColor}`,
        transition: 'fontSize fontColor 1s',
      }}/>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: filterImg,
          transition:'filter 1s',
        }}
      />
    </div>
  );
};

export default CardItem;
