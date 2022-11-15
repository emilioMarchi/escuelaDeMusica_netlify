import React from 'react'
import GoogleMap from 'simple-react-google-maps'

export default function Map() {
    const center = {lat:-31.6308286, lng:-60.7206793}

    const Marker = () => {
        return(
            <div>
                <h2>marker</h2>
            </div>
        )
    }

    return(
        
        <GoogleMap
            onClick={()=>{
                alert('function')
            }}
            
            apiKey={'AIzaSyDgBV7FsYzoXGjYVOzg_zAG4YIS19KOE0I'}
            style={{height:'100%', width: '100%'}}
            zoom={18}
            center={center}
            markers={[{lat:-31.6308286, lng:-60.7206793, namespace:'nombre'}]}
            mapContainerClassName='map-container'
            
            >
        </GoogleMap>

    )
}


