import CardItem from './CardItem'
import './photoGallery.css'
import $ from 'jquery'

const galleryImages = [{url: '/img/01.jpg', id:1},{url: '/img/02.jpg', id:2}, {url: '/img/03.jpg', id:3},
{url: '/img/04.jpg', id:4},{url: '/img/05.jpg', id:5},{url: '/img/06.jpg', id:6},
{url: '/img/07.jpg', id:7},{url: '/img/08.jpg', id:8},{url: '/img/09.jpg', id:9},
{url: '/img/10.jpg', id:10},{url: '/img/11.jpg', id:11},{url: '/img/12.jpg', id:12}, ]

export const PhotoGallery = ({galleryList}) => {
    
    return (
        <div className='photo-gallery-container'>
            {
                galleryList.map((item)=>{
                    return <CardItem id={item.id} imageUrl={item.url}/>
                })
            }
        </div>
    )
}