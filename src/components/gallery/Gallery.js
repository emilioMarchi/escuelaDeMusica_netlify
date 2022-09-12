import React, {useEffect, useState} from  'react' 
import Carousel from 'react-bootstrap/Carousel';

import GalleryItem from './GalleryItem'
import './gallery.css'

const galleryImages = [{url: '/img/portada-1.webp'}, {url: '/img/portada-2.jpeg'}, {url: '/img/portada-3.webp'}, {url: '/img/portada-3.webp'}, {url: '/img/portada-2.jpeg'}, {url: '/img/portada-1.webp'}, {url: '/img/portada-2.jpeg'}, {url: '/img/portada-1.webp'}, ]

export function Gallery () {

    const arraysGallery = []
    function orderArrayCarrousel() {
        let index = {a:0, b:3}
        const numberImg = galleryImages.length
        const galleryDivision = numberImg/3
        const galleryDivisionInt = parseInt(galleryDivision)
        const rest =  -(numberImg-galleryDivisionInt*3)
        
        function dobleIndex () {
            index.a+=3; index.b+=3
        }
        function esEntero(numberImg){
            if (numberImg % 1 == 0) {
                return true
            } else {
                return false
            }
        }
        
        
        for(let i=0; i<galleryDivisionInt; i++){
            arraysGallery.push(galleryImages.slice(index.a, index.b))
            dobleIndex()
        }

        if(esEntero(galleryDivision)){
        }else {
            arraysGallery.push(galleryImages.slice(rest))
        }
    }
    
    
    
    orderArrayCarrousel()
    
    useEffect(()=>{
        console.log(arraysGallery)
        
    }, [])

    return(
        <div className='photo-gallery'>
        
            <div className='gallery-container'>
                <Carousel className='carousel-header' controls={false}>
                    {
                        arraysGallery!==undefined ?
                        arraysGallery.map((item)=>{
                            const array = item
            
                            return(
                                
                                    <Carousel.Item className='carousel-item'>
                                        <div>

                                            {
                                                array.map((item)=>{
                                                    return (
                                                        <img src={item.url} />
                                                    )
                                                    
                                                })
                                            }
                                       
                                        </div>
                                    </Carousel.Item>
                                
                            )
                        }) : ''
                    }
                </Carousel>
                
            </div>
        </div>
    )
}