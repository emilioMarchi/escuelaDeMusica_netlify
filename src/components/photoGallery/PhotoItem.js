import $ from 'jquery'
import './photoItem.css'
export const PhotoItem = ({url,id}) => {

    $('.photo-item').hover(()=>{console.log('hover')})
    return(
        <div className='photo-item' >
            <p>ver foto</p>
            <div className='img-container' style={{'backgroundImage': `url(${url})`}} id={id}></div>
        </div>
    )
}