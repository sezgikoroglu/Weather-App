import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6 '>
            <p className='text-white font-medium uppercase '>{title}</p>
        </div>
        <hr className='my-3'/>
        <div className='flex flex-row justify-between items-center '>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='font-light text-white text-sm'>02:00 PM</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12' alt="" />
                <p className='text-white'>19°</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='font-light text-white text-sm'>02:00 PM</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12' alt="" />
                <p className='text-white'>19°</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='font-light text-white text-sm'>02:00 PM</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12' alt="" />
                <p className='text-white'>19°</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='font-light text-white text-sm'>02:00 PM</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12' alt="" />
                <p className='text-white'>19°</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='font-light text-white text-sm'>02:00 PM</p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" className='w-12' alt="" />
                <p className='text-white font-medium'>19°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast