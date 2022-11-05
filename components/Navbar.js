import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar absolute bottom-4  w-full flex  justify-center '>
      <div className="navbar_container flex bg-slate-900 w-[22rem] justify-between rounded-3xl font-base font-bold p-6 px-8">
     <div className='home text-white '>Home</div>
     <div className='complaints text-white '>Complaints</div>
     <div className='history text-white'>History</div>
    </div>
    </div>
  )
}

export default Navbar   