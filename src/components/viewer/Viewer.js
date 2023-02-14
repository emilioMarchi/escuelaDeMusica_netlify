import React, {useContext} from 'react'
import './viewer.css'
import Carousel from 'react-bootstrap/Carousel';
import { GalleryContext } from '../../context/galleryContext/GalleryContext';


export const Viewer = () => {
    
    const [viewer, setViewer, galleryView, setGalleryView, 
        galleryList, setGalleryList, imgSelected, setImgSelected] = useContext(GalleryContext)
    
    const filterList = () => {
      const filterList = galleryList.slice(0,4)
      console.log(filterList)
    }
    filterList()
    console.log(galleryList.length)
  return (
      <>
    <Carousel className='viewer-carousel'>
      {
        galleryList.map((item)=>{

              return(
                <Carousel.Item className='viewer-item' key={item.id}>
                      <div className='item-img'>
                          <img src={`${item.url}`} />
                      </div>
                    </Carousel.Item>
              )
            })
          }
    </Carousel>
          
    </>
  );
}



