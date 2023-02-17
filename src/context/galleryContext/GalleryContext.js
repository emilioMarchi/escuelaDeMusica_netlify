import React, {createContext, useState} from 'react'

const photoGallery = [{url: '/img/01.jpg', id:1},{url: '/img/02.jpg', id:2}, {url: '/img/03.jpg', id:3},
{url: '/img/04.jpg', id:4},{url: '/img/05.jpg', id:5},{url: '/img/06.jpg', id:6},
{url: '/img/07.jpg', id:7},{url: '/img/08.jpg', id:8},{url: '/img/09.jpg', id:9},
{url: '/img/10.jpg', id:10},{url: '/img/11.jpg', id:11},{url: '/img/12.jpg', id:12}, ]

const videoGallery = [{url: 'https://www.youtube.com/embed/h6PdmrJemZo', id:1},{url: 'https://www.youtube.com/embed/N2ATtTdXrKg', id:2}, 
{url: 'https://www.youtube.com/embed/XPNc1a01TtY', id:3},{url: 'https://www.youtube.com/embed/VIb33UUquEI', id:4},
{url: 'https://www.youtube.com/embed/CYKFbmsa5NE', id:5},{url: 'https://www.youtube.com/embed/MscOL6BDvfI', id:6},]


export const GalleryContext = createContext()

export const GalleryProvider = ({children}) => {
    
    const [galleryList, setGalleryList] = useState(photoGallery)
    const [videoList, setVideoList] = useState(videoGallery)
    const [imgSelected, setImgSelected] = useState(videoGallery)
    const [viewer, setViewer] = useState(false)
    const [galleryView, setGalleryView] = useState('fotos')
    

    return(
        <GalleryContext.Provider value={[viewer, setViewer, galleryView, setGalleryView, galleryList, setGalleryList, imgSelected, setImgSelected,
                                        videoList, setVideoList]}>
            {children}
        </GalleryContext.Provider>
    )
}