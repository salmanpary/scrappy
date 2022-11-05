import Image from 'next/image'
import React from 'react'

function CollectorExpanded() {
  return (
    <div className='ml-6'>
        <h1 className='text-xl font-semibold'> ID ABCD123</h1>
        <div className="mt-6">
            <h3 className='font-semibold'>Location</h3>
            <h3 className='font-semibold'>Date and Time</h3>
            <Image src='/img.png' width={200} height={100} className='' />
            <div className="">
            <h3 className='font-semibold'>Items</h3>
            <ul className='ml-4'>
                <li>Item 1</li>
            </ul>
            </div>
        </div>
        <div className="flex justify-evenly">
            <div className="w-fit bg-gray-500 px-6 py-2 text-white font-bold rounded-lg">Accept</div>
            <div className="w-fit bg-gray-500 px-6 py-2 text-white font-bold rounded-lg">Decline</div>
        </div>


    </div>
  )
}

export default CollectorExpanded