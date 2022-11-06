import React from 'react'
import Link from 'next/link'
const Signup1 = () => {
  const [role,setRole] = React.useState('')
  return (
    <div className='flex-col flex items-center  gap-8 mt-12' >
      <div className=' bg-slate-900 rounded-full h-32 w-32 '></div>
      <div className=' text-slate-900 font-poppins font-bold text-3xl mt-2 mb-24'>Sign Up/Login As</div>
      <div className='flex-col flex gap-8'>
        <Link href='/signup'>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl '>User</button>
      </Link>
      <Link href="/signup">
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl '>Collector</button>
      </Link>
      </div>
    </div>
  )
}

export default Signup1