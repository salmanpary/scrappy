import React from 'react'
import Collector from '../../components/Cards/Collector'

function CollectorHome() {
  return (
    <div>
    <h3 className='ml-4 font-bold text-2xl'>Requests</h3>
        <div className="flex flex-col gap-4 text-white mt-4 items-center">
        <Collector />
        <Collector />
        <Collector />
        </div>
    </div>
  )
}

export default CollectorHome