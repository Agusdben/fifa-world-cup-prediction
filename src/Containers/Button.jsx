import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button
      className='text-xl p-2 md:px-10 rounded-md shadow-md shadow-black cursor-pointer bg-gradient-to-r from-rose-700 to-rose-900 text-white font-bold disabled:opacity-40 disabled:cursor-default hover:from-trasparent hover:to-transparent'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
