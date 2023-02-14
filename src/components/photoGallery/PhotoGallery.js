import React, {useContext, useRef} from 'react'
import CardItem from './CardItem'
import './photoGallery.css'
import $ from 'jquery'
import { GalleryContext } from '../../context/galleryContext/GalleryContext'
import {Viewer} from '../viewer/Viewer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



export const PhotoGallery = () => {
    
    const [viewer, setViewer, galleryView, setGalleryView, 
        galleryList, setGalleryList, imgSelected, setImgSelected] = useContext(GalleryContext)
    
    return (
        <div className='photo-gallery-container'
            onClick={(e)=>{

            }}
        >

            {
                viewer === true ?
                <>
                    <FontAwesomeIcon icon={faArrowLeft} className='exit-icon' 
                    onClick={()=>{
                        if (viewer === true) {
                            setViewer(false)
                        } else {}
                    }}
                    style={{
                        color:'white', zIndex:'150', position:'fixed',
                        top:'5vh', left:'5vw', borderRadius:'5rem', height:'1.5rem', width:'1.5rem',
                        padding:'0.5rem', backgroundColor:'black', cursor:'pointer',
                        

                    }} />
                    <Viewer style={{width:'100%', height:'100%', backgrounColor:'black',}}/>
                </> 
                : ''
            }
            {
                galleryList.map((item)=>{
                    const id = item.id
                    return (
                        <>
                            <CardItem  id={id} imageUrl={item.url} 
                             />
                        </>
                    )
                })
            }
        </div>
    )
}