import React from 'react'

const Output = ({expression, result}) => {
  return (
    <div className='w-72 h-44 bg-gray-950 rounded-t-lg flex flex-col justify-end items-end pb-4 overflow-hidden'>
        <h1 className='text-white text-2xl px-3'>{expression}</h1>
        <h1 className='text-cyan-400 text-2xl px-3'>{result}</h1>
    </div>
  )
}

export default Output
