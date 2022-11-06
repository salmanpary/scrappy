import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userRoleActions } from '../store/userrole-slice'
const Signup1 = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex-col flex items-center  gap-8 mt-12' >
      <div className=' bg-slate-900 rounded-full h-32 w-32 '></div>
      <div className=' text-slate-900 font-poppins font-bold text-3xl mt-2 mb-24'>Sign Up/Login As</div>
      <div className='flex-col flex gap-8'>
        <Link href='/signup'>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl ' onClick={()=>{dispatch(userRoleActions.setUserRole({userrole:"user",location:"",name:""}))}}>User</button>
      </Link>
      <Link href="/signup">
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium h-14 rounded-3xl ' onClick={()=>dispatch(userRoleActions.setUserRole({userrole:"collector",location:"",name:""}))}>Collector</button>
      </Link>
      </div>
    </div>
  )
}

export default Signup1