import React from 'react'

const Cards = (props) => {
  return (
    <div className='card bg-slate-900 w-32 h-32 rounded-3xl mx-4 flex-col justify-start p-4'>
        <div className='icon text-white font-poppins font-bold'>{props.icon}</div>
        <div className='main-text text-white font-poppins font-bold pb-1 pt-4'>{props.main}</div>
        <div className='sub-text text-white text-xs font-light font-poppins'>{props.sub}</div>
    </div>
  )
}

export default Cards