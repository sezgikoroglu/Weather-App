import React from 'react'
const list=[
  {
    title:"Paris",
    id:1
  },
  {
    title:"Sidney",
    id:2,
  },
  {
    title:"Tokyo",
    id:3
  },
  {
    title:"Toronto",
    id:4
  },
  {
    title:"Berlin",
    id:5
  }
]
function TopButtons({setQuery}) {
  return (
    <div className='flex items-center justify-around my-6'>
      {
      list.map(city=>
      <button 
          className="text-white text-lg font-medium" 
          key={"city"+city.id}
          onClick={() => setQuery({ q: city.title })}
        >{city.title}
      </button>
      )}
    </div>
    
  )
}

export default TopButtons