import './photoItem.css'
export const PhotoItem = ({url}) => {
    return(
        <div className={`photo-item`} >
            <div className='img-container' style={{'backgroundImage': `url(${url})`}}></div>
        </div>
    )
}