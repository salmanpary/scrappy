import Image from 'next/image'
import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

function Collector() {
  return (
    <div className=' w-[90vw] bg-gray-500 p-2 rounded-lg'>
    <div className="flex justify-between items-center">
    <div className="flex items-center">
       <Image src='/img.png' width={80} height={100} className='' />
       <div className=" ml-4 flex flex-col"> <h3>Place</h3>
       <h3>Date</h3>
        
       </div>
    </div>
    <h3><AiOutlineRight className='text-3xl font-thin'/></h3>
    </div>
    
    </div>
  )
}

export default Collector