import React, { useState } from 'react'
import Collector from '../../components/Cards/Collector'
import CollectorExpanded from '../../components/Collector/CollectorExpanded'

function CollectorHome() {

    const [i, setI] = useState(true)
    setTimeout(() => {
        setI(false)
    }, [5000])

    return (
        <div>
            {/* <h3 className='ml-4 font-bold text-2xl'>Requests</h3>
            <div className="flex flex-col gap-4 text-white mt-4 items-center">
                <Collector />
                <Collector />
                <Collector />
            </div> */}
            <CollectorExpanded />

        </div>
    )
}

export default CollectorHome