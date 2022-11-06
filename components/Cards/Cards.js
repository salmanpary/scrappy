import React from 'react'

const Cards = ({item,selectedoptions,handleChange}) => {
  return (
    <div className='card bg-slate-900 w-32 h-32 rounded-3xl mx-4 flex-col justify-start p-4'>
        <div className='flex justify-between'>
          <div className='icon text-white font-poppins font-bold'>icon</div>
          <input type= 'checkbox' className='h-4 w-4 rounded-full' value={item.title} checked={selectedoptions?.includes(item.title)} onChange={(e)=>{
            handleChange(e)
            

          }}></input>
        </div>
        <div className='main-text text-white font-poppins font-bold pb-1 pt-4'>{item.title}</div>
        <div className='sub-text text-white text-xs font-light font-poppins'>{item.description}</div>
    </div>
  )
}

export default Cards