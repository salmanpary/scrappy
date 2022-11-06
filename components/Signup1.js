import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userRoleActions } from '../store/userrole-slice'
import Balls from './Balls'
import logo from '../public/scrappy.png'

const Signup1 = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex-col justify-center flex items-center h-screen  ' >
      <img src = {logo}/>
      <div className=' card  flex flex-col justify-center items-start '>
      <div className=' font-poppins text-lg font-semibold text-white mb-8 ml-8 '>SignUp As</div>
      <div className='flex-col flex gap-12'>
        <Link href='/signup'>
      <button className=' text-white  button-gradient font-poppins   w-64  font-medium h-12 rounded-2xl ml-8 ' onClick={()=>{dispatch(userRoleActions.setUserRole({userrole:"user",location:"",name:""}))}}>User</button>
      </Link>
      <Link href="/signup">
      <button className='button-gradient text-white font-poppins   w-64  font-medium h-12 rounded-2xl ml-8 ' onClick={()=>dispatch(userRoleActions.setUserRole({userrole:"collector",location:"",name:""}))}>Collector</button>
      </Link>
      </div>
      </div>
      <Balls/>
    </div>
  )
}

export default Signup1