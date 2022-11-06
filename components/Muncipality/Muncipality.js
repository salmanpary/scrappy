import React, { useEffect, useState } from 'react'
import Muncipalitycard from './Muncipalitycard'
import axios from 'axios'
import Balls from '../Balls'
import Navbar from "../Navbar";

const Muncipality = () => {

  const [collection, setCollection] = useState({})
  const fetchApi = async () => {
    try {

      const response = await axios.get(' https://scrappy-beta.herokuapp.com/complaints')
      setCollection(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div className='m-10'>

        <div className='font-bold text-white text-3xl font-poppins card4 p-4 flex flex-col justify-start'>Muncipality
        <div className='font-light text-sm text-white'>registered complaints :</div></div>
        

        <div className="flex flex-col gap-6">
         <div className='card1 flex justify-start p-4 px-6 mt-4'>
         <h3 className='font-poppins text-xl text-gray-800 font-normal'>Pending :</h3>
         </div>
          {collection?.municipality?.map((item, index) => (
            <>
              {!item?.status &&
                <Muncipalitycard key={index} item={item} resolve={false} />
              }
            </>
          ))}

          <div className="">
            <h3>Not Resolved</h3>
            {collection?.municipality?.map((item, index) => (
              <>
                {(item?.accepted && !item?.resolved) &&
                  <Muncipalitycard key={index} item={item} resolve={true} />
                }
              </>
            ))}
          </div>
        </div>


        <Balls w='300' h = '400'/>
        <Navbar/>
      </div>
    </>
  )
}

export default Muncipality