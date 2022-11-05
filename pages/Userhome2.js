import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

const Userhome2 = () => {
  return (
    <div className=''>
        
        <Topbar/>

        <div className='main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-slate-300 rounded-3xl p-3 px-4'>Sell Your Scraps </div>
        
       <div className='flex justify-center'>
         <button className='bg-slate-900 text-white font-poppins   w-72  font-medium h-24 rounded-3xl mt-4  mb-8'>Upload Photo</button>
         
       </div>
       <div className='main-page-text flex w-52 ml-12 justify-start font-poppins text-m font-bold m-4  bg-slate-300 rounded-3xl p-3 px-4'>Scheduled Pickups </div>
      
       <div className='flex justify-start ml-16'>
       <input type= 'date'></input> 
       </div>

       <div className='main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-slate-300 rounded-3xl p-3 px-4 mt-16'>Select Time</div>

       <div className='flex justify-start ml-16 items-center  '>
       <input type= 'time' className='from-date h-16 w-16'></input>
       <h4 className='mx-6 font-poppins font-bold'>To</h4> 
       <input type= 'time' className=' to-date h-16 w-16'></input> 
       </div>

       <div className='main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-slate-300 rounded-3xl p-3 px-4 '>Pickup location</div>

       <div className='flex justify-center'>
         <button className='bg-slate-900 text-white font-poppins   w-52  font-medium h-14 rounded-3xl mt-8 '>Submit</button>
       </div>

       
      <Navbar/>
    </div>
  )
}

export default Userhome2