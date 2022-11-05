import React from 'react'
import Collector from '../../components/Cards/Collector'

function CollectorHome() {
  return (
    <div>

        <div className="flex flex-col gap-4 items-center">
        <Collector />
        <Collector />
        <Collector />
        </div>
    </div>
  )
}

export default CollectorHome