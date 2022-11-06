import axios from "axios";
import React from "react";
import { useState } from "react";
import {BsChevronCompactDown , BsChevronCompactUp} from 'react-icons/bs'

const Muncipalitycard = ({ item, key, resolve }) => {
  const id = item?._id
  const [toggle,setToggle] = useState(false)
  const [accdata, setAccdata] = useState({
    status: false,
    accepted: false,
    resolved: false

  })
  const changeData = async () => {
    try {
      const response = await axios.post(`https://scrappy-beta.herokuapp.com/complaints/${id}`, accdata)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    console.log(accdata)

  }

  return (
    <div style={{ 
      backgroundImage:`url(${item?.photo})`,
    }} className="h-[30vh] flex flex-col justify-end rounded-lg">
      {/* <img src={item.photo} alt="" height={100} width={300} style={
        {
          width:'80vw',
          height:'30vw'
        }
      } /> */}

      <div className="p-3 bg-slate-500 mt-[-2px] z-50 rounded-md">
      <div className="flex justify-between ">
        <div>{item.location} <br />
        raised on {item.date}
        
        </div>
        {resolve ? <div className="bg-red-400 py-2 px-4">
          Mark as Resolved
        </div> : <div className="flex flex-col gap-3">
          <button className="bg-green-400" onClick={() => {
            setAccdata({
              status: true,
              accepted: true,
              resolved: false
            })
            changeData()
          }}>ACCEPT</button>
          <button className="bg-red-300"
            onClick={() => {
              setAccdata({
                status: true,
                accepted: false,
                resolved: false
              })
              changeData()
            }}>DECLINE</button>
        </div>}
       
      </div>
      {toggle && <>{item.title}</>}
      <h2 className="text-white flex items-center justify-center text-3xl text-center">{toggle ? <div onClick={()=>setToggle(!toggle)}><BsChevronCompactUp /></div>:<div onClick={()=>setToggle(!toggle)}><BsChevronCompactDown /></div>}</h2>
      </div>
    </div>
  );
};

export default Muncipalitycard;
