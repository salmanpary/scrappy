import React from 'react'

const Signup1 = () => {
  return (
    <div className='flex-col flex items-center  gap-8 mt-12' >
      <div className=' bg-slate-900 rounded-full h-32 w-32 '></div>
      <div className=' text-slate-900 font-poppins font-bold text-3xl mt-2 mb-24'>Sign Up As</div>
      <div className='flex-col flex gap-8'>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl '>User</button>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl '>Collector</button>
      </div>
    </div>
  )
}

export default Signup1