
import React ,{useState } from 'react'

function Test() {
  const [count,setcount] =useState(0)
  return (
    <div className='flex ' >
      <div className='text-red-900 bg-gray-100 w-10 m-12 flex justify-center items-center'>
        <button onClick={() => setcount(count+1)} className='flex justify-center ' >
               +
        </button>
        
        </div>
        <h1 className='text-white'> {count}</h1>
      <div className='text-red-900 bg-gray-100 flex justify-center w-10 m-12'>
        <button onClick={() => setcount(count-1)} className='items-center'>
               -
        </button>
        </div>
    </div>
  )
}

export default Test