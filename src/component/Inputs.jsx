import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons'
import { toast } from 'react-toastify'; 

function Inputs({setQuery,setUnits,units}) {

  const [city,setCity]=useState("");

  const handleSearchClick=()=>{
    if (city !== "" ) setQuery({q:city})
    setCity("")
  };

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      toast.info("Fetching users location.")
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("Location fetched!")
        let lat=position.coords.latitude;
        let lon=position.coords.longitude;

        setQuery({
          lat,lon
        })
      })
    }
  };

  const handleUnit=(e)=>{
    const selectedUnit=e.target.name;
    if (units !== selectedUnit) setUnits(selectedUnit)
  };
 
  return (
    <div className='flex flex-row  justify-center mx-6'>
    <div className='flex flex-row w-3/4 items-center justify-center   space-x-4'>
       <input
        type='text'
        placeholder='Seacrh for city...'
        className='text-xl font-light p-2 w-full capitalize shadow-xl placeholder:lowercase focus:outline-none'
        value={city}
        onChange={(e)=>{setCity(e.target.value)}}
        >
        
       </input>
       <UilSearch
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
       />
       <UilMapMarker
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}
       />
    </div>
    <div className='flex flex-row w-1/4 justify-center items-center space-x-1 text-xl text-white'
    > 
        <button 
        className=" cursor-pointer transition ease-out hover:scale-125"
        onClick={handleUnit}
        name='metric'>
           °C</button>
        
        <p>|</p>
        <button 
         onClick={handleUnit}
         name='imperial'
        className="cursor-pointer transition ease-out hover:scale-125">  °F</button>
    </div>
    </div>
  )
}

export default Inputs