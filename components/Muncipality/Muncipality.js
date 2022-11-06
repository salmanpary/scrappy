import React, { useEffect, useState } from 'react'
import Muncipalitycard from './Muncipalitycard'
import axios from 'axios'
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

        <div className='font-bold text-3xl'>Muncipality</div>
        <div>Registered Complaints</div>

        <div className="flex flex-col gap-6">
          <h3>Pending</h3>
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



      </div>
    </>
  )
}

export default Muncipality