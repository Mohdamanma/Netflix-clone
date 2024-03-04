import React from 'react'

function Singlemovie({data}) {
  return (

<div>
    <div className='text-red-900 text-2xl'>
    <h1 >{data.heading}</h1>
    </div>
    <img src={data.image}/>
    
</div>
  )
}

export default Singlemovie