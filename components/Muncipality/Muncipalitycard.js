import React from 'react'

const Muncipalitycard = () => {
  return (
    <div>
      

        <img src="/img.png" alt="" height={300} width={300} />
    
        
            <div className='flex justify-between p-3 bg-slate-500 mt-[-2px] z-50 rounded-md'>
                <div>Location</div>
                <div className='flex flex-col gap-3'>

                <button className='bg-green-400'>
                    ACCEPT
                </button>
                <button className='bg-red-300'>
                    DECLINE
                </button>
                </div>



        </div>
    </div>
  )
}

export default Muncipalitycard