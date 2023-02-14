import React, {useState, useContext, useEffect} from 'react'
import './viewer.css'
import Carousel from 'react-bootstrap/Carousel';
import { GalleryContext } from '../../context/galleryContext/GalleryContext';


export const Viewer = () => {
    
    const [newGalleryList, setNewGalleryList] = useState([])
    const [viewer, setViewer, galleryView, setGalleryView, 
        galleryList, setGalleryList, imgSelected, setImgSelected] = useContext(GalleryContext)
    
    const filterList = () => {

      const max = galleryList.length  
      
      const firstArray = galleryList.slice(imgSelected-1, max)
      const secondArray = galleryList.slice(0, imgSelected-1)

      const newArray = firstArray.concat(secondArray)
      setNewGalleryList(newArray)


    }
    
    useEffect(()=>{
      filterList()
    }, [])

  return (
      <>
    <Carousel className='viewer-carousel'>
      {
        newGalleryList.length>0 ?
        newGalleryList.map((item)=>{

              return(
                <Carousel.Item className='viewer-item' key={item.id}>
                      <div className='item-img'>
                          <img src={`${item.url}`} />
                      </div>
                    </Carousel.Item>
              )
            }) : ''
          } 
    </Carousel>
          
    </>
  );
}



