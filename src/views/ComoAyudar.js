import React, {useState, useEffect} from 'react'

import './ComoAyudar.css'
import Payments from '../components/Payments/Payments'
import FormContact from '../components/formContact/FormContact'

export default function CAyudarView (){
    
    const [typeDonation, setTypeDonation] = useState()
    
    useEffect(()=>{
        window.scroll(0,0)
    }, [])
        return(
            <div className='c-ayudar-view'>
                <div className='q-somos-view'>
                    <div className='section-1 d-flex container q-somos-title'>
                        <div className='title col'>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='donation-container'>
                        <div className='donation-header'>
                            <h2>Si te interesa colaborar, a continuacion te dejamos opciones de como podes hacerlo</h2>
                            <div className='donation-buttons'>
                                <a onClick={()=>{setTypeDonation('donation')}}>Quiero donar un instrumento</a>
                                <a onClick={()=>{setTypeDonation('payment')}}>Quiero hacer una donacion voluntaria</a>
                                <a onClick={()=>{setTypeDonation('subscription')}}>Quiero ser socio voluntario del proyecto</a>
                        
                            </div>
                        </div>
                            {
                                typeDonation === 'payment' || typeDonation === 'subscription' ? 
                                <Payments type={typeDonation}/> : 
                                typeDonation === 'donation' ? 
                                <FormContact/> : ''
                            }
        
                    </div>
                </div>
            </div>
        )
}
