import React from 'react'

const Cards = () => {
  return (
    <div className='card bg-slate-600 w-32 h-32 rounded-3xl m-32 flex-col justify-start p-4'>
        <div className='icon text-white font-poppins font-bold'>Icon</div>
        <div className='main-text text-white font-poppins font-bold pb-1 pt-4'>PAPER</div>
        <div className='sub-text text-white text-xs font-light font-poppins'>Carton Box , Magazines etc.</div>
    </div>
  )
}

export default Cards