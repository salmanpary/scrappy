import React from 'react'
import Muncipalitycard from './Muncipalitycard'
import Navbar from './Navbar'
const Muncipality = () => {
  return (
    <>
    <div className='m-10'>

    <div className='font-bold text-3xl'>Muncipality</div>
    <div>Registered Complaints</div>
    <Muncipalitycard/>
    <Muncipalitycard/>

    <Muncipalitycard/>

   
    </div>
    </>
  )
}

export default Muncipality