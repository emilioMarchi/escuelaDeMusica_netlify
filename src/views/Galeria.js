import React, {useState} from 'react'
import { PhotoGallery } from '../components/photoGallery/PhotoGallery'
import './Galeria.css'

export const GaleriaView = () => {

    const [navState, setNavState] = useState('foto')

        return(
            <div className='galeria-view'>
                <div className='galeria'>
                    <div className='q-somos-view'>
                        <div className='section-1 d-flex container q-somos-title'>
                            <div className='title col'>
                            </div>
                        </div>
                    </div>
                    <div className='title'>
                        <h1>Galeria</h1>
                    </div>
                    <div className='galeria-nav'>
                        <button className={navState === 'foto' ? 'selected' : ''} onClick={()=>{setNavState('foto')}} >Fotos</button>
                        <button className={navState === 'video' ? 'selected' : ''} onClick={()=>{setNavState('video')}}>Videos</button>
                    </div>
                    <div className='galeria-content'>
                        {
                            navState === 'foto' ?
                            <PhotoGallery/> :
                            navState === 'video' ?
                            'VIDEO' : ''
                        }
                    </div>
                </div>
            </div>
        )
}
