import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeandLocation({weather:{dt, timezone,  name, country}}) {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date();
  let day_name = days[date.getDay()];
  let month = months[date.getMonth()];
  let day=date.getDate();
  let year=date.getFullYear();
  
  console.log(date)
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                  {/* {formatToLocalTime( dt,timezone)} */
                  }
                  {day_name} , {day} {month} {year}
              </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>{name} {country} </p>
        </div>
    </div>
  )
}

export default TimeandLocation