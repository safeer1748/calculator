import React from 'react'
const Button = ({symbol,color,btnClick}) => {
  return (
    <>
    
    <button onClick={()=>btnClick(symbol)} className= {`${color?'text-cyan-400':'text-white'} text-2xl  active:bg-cyan-400 aspect-square duration-700 rounded-full mx-auto p-2`}>{symbol}
    </button>
    </>
  )
}

export default Button
 