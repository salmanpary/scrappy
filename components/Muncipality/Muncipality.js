import React,{useEffect,useState} from 'react'
import Muncipalitycard from './Muncipalitycard'
import axios from 'axios'
const Muncipality = () => {

  const [collection,setCollection] = useState({})
  const fetchApi = async() => {
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
          
        {collection?.municipality?.map((item,index)=>(
          <Muncipalitycard key={index} item={item}/>
        ))}
        </div>
      


      </div>
    </>
  )
}

export default Muncipality