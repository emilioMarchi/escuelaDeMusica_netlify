import { PhotoItem } from './PhotoItem'
import './photoGallery.css'
const galleryImages = [{url: '/img/01.jpg'},{url: '/img/02.jpg'}, {url: '/img/03.jpg'},
{url: '/img/04.jpg'},{url: '/img/05.jpg'},{url: '/img/06.jpg'},
{url: '/img/07.jpg'},{url: '/img/08.jpg'},{url: '/img/09.jpg'},
{url: '/img/10.jpg'},{url: '/img/11.jpg'},{url: '/img/12.jpg'},  ]

export const PhotoGallery = () => {
    return (
        <div className='photo-gallery-container'>
            {
                galleryImages.map((item)=>{
                    return <PhotoItem url={item.url}/>
                })
            }
        </div>
    )
}