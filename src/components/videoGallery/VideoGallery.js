import React, {useContext, useRef} from 'react'
import { GalleryContext } from '../../context/galleryContext/GalleryContext'
import {Viewer} from '../viewer/Viewer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import VideoItem from './VideoItem'


export const VideoGallery = () => {
    
    const [viewer, setViewer, galleryView, setGalleryView, 
        galleryList, setGalleryList, imgSelected, setImgSelected,
        videoList, setVideoList,] = useContext(GalleryContext)
    
     
    return (
        <div className='photo-gallery-container'
            
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
                videoList.map((item)=>{
                    return(
                        <>
                            <VideoItem  id={item.id} url={item.url} />
                        </>
                    )
                })
            }
        </div>
    )
}