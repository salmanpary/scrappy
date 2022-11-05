import React from 'react'

const Login = () => {
  return (
    <div className='flex-col flex items-center  gap-8 mt-12' >
      <div className=' bg-slate-900 rounded-full h-32 w-32 '></div>
      <div className=' text-slate-900 font-poppins font-bold text-3xl mt-2 mb-4'>Login </div>
      <div className='flex-col flex gap-4'>
        <input type = 'text ' placeholder='Email Address' className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

        <input type = 'text ' placeholder='Password' className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

       
      </div>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl mt-8'>Login</button>
    </div>
  )
}

export default Login