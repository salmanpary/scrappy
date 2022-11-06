import React from 'react'
import {useJsApiLoader,GoogleMap,Marker,Autocomplete} from '@react-google-maps/api'
import { useState } from 'react'


const center = {lat:48.4,lng:2.29}
function GMap() {
  const [map,setMap] = useState(/** @type google.maps.Map */)

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey : process.env.GOOGLE_API,
    
  })
  if(!isLoaded){
    return <>Loading...</>
  }
  return (
    <div className='w-screen h-screen '>
<div className="absolute  z-20 text-3xl bg-white" onClick={()=>map.panTo(center)}>
  Center
 

  {/* <input type="text" name="" id="" className='border' /> */}
 
</div>
<GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}}
onLoad={(map)=>setMap(map)}>
  <Marker position={center}/>
</GoogleMap>



    </div>
  )
}

export default GMap