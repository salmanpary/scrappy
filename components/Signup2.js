import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { userRoleActions } from '../store/userrole-slice'
import { useDispatch } from 'react-redux'
const Signup2 = () => {
  const role=useSelector(state=>state.user.userrole)
  const  dispatch=useDispatch()
  console.log(role)

  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
    address:'',
    phone:'',
    userrole:role
  })
const handleChange = (e)=>{
  const {name,value} = e.target;
  setData({...data,[name]:value})

}
const submitHandler=async()=>{
  console.log(data)
  try{

 const res=await axios.post("https://scrappy-beta.herokuapp.com/auth/signup",data)
 dispatch(userRoleActions.setUserRole({
  userrole:role,
  name:res?.data?.newUser?.name,
  location:res?.data?.newUser?.address,
 }))
 router.push('/login')

    
  }catch(e){
    console.log(e)
  }
}

  const router = useRouter()
  return (
    <div className='flex-col font-poppins flex items-center  gap-8 mt-12' >
      <div className=' bg-slate-900 rounded-full h-32 w-32 '></div>
      <div className=' text-slate-900 font-poppins font-bold text-3xl mt-2 mb-4'>Sign Up </div>
      <div className='flex-col flex gap-4'>
        <input type = 'text ' placeholder='UserName' name='name' value={data.name} onChange={handleChange} className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

        <input type = 'text ' placeholder='PhoneNumber' name='phone' value={data.phone} onChange={handleChange} className='border  border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

        <input type = 'text ' placeholder='Residential Address' name='address' value={data.address} onChange={handleChange} className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

        <input type = 'email ' placeholder='Email Address' name='email' value={data.email} onChange={handleChange} className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>

        <input type = 'password ' placeholder='Password' name='password' value={data.password} onChange={handleChange} className='border border-slate-900 p-4 h-14 w-64 rounded-3xl bg-slate-100'></input>
      </div>
      <button className='bg-slate-900 text-white font-poppins   w-64  font-medium py-4 rounded-3xl mt-8'
      onClick={()=>submitHandler()}
      >Signup</button>
        <button className=' text-balck font-poppins   w-64  font-medium rounded-3xl mt-2'
      onClick={()=>router.push('/login')}
      >already a user?</button>
    </div>
  )
}

export default Signup2