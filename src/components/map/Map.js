import React from 'react'
import GoogleMap from 'simple-react-google-maps'

export default function Map() {
    const center = {lat:-31.6308448, lng:-60.7228647}

    const Marker = () => {
        return(
            <div>
                <h2>marker</h2>
            </div>
        )
    }

    return(
        
        <GoogleMap
            
            apiKey={'AIzaSyDgBV7FsYzoXGjYVOzg_zAG4YIS19KOE0I'}
            style={{height:'100%', width: '100%'}}
            zoom={15}
            center={center}
            markers={[center]}
            mapContainerClassName='map-container'
            >
        </GoogleMap>

    )
}


