import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
function UserComplaint() {
    const router = useRouter()
    const [complaint,setComplaint] = useState({
        title : '',
        photo : '',
        date: new Date().toDateString(),
        location : '',
        status : false,
        accepted:false,
        resolved : false
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setComplaint({...complaint,[name]:value})
      
      }
    const handleSubmit =async ()=>{
        try {
            const response = await axios.post('https://scrappy-beta.herokuapp.com/complaints',complaint)
            console.log(response)
           setTimeout(() => {
            alert("complaint raised successfully")
           }, 2000);
           router.push('/userhome')
           
        } catch (error) {
            console.log(error)
        }

    }
   

  return (

    <div>
        <h3>Report a place?</h3>
        <div className="">
        <h3>Location</h3>
            <input type="text" name="location" value={complaint.location} onChange={handleChange} id="" />
        <h3>Upload Photo</h3>
        <input type="text" name="photo" value={complaint.photo} onChange={handleChange} id="" />
        <h3>Brief Description</h3>
        <input type="text" value={complaint.title} onChange={handleChange} name="title" id="" />

        </div>
        <div className="" onClick={handleSubmit}>Submit</div>
    </div>
  )
}

export default UserComplaint