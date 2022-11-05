
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'


export default function Home() {
  return (
    <div>

        <div className='main-page-text flex justify-center font-poppins text-3xl font-bold m-4 mt-8 mb-16 bg-slate-300 rounded-3xl p-4'>Sell Your Scraps !</div>
        <div className='card-container'>

      <div className='card-container-row1 flex  justify-center m-8'>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
      </div>

      <div className='card-container-row2 flex  justify-center m-8'>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
      </div>

      <div className='card-container-row3 flex  justify-center m-8'>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
       <Cards main = 'PAPER' sub = 'Carton box , magazines etc. ' icon = 'Icon'/>
      </div>

       
       
    </div>
       <div className='flex justify-center'>
         <button className='bg-slate-900 text-white font-poppins   w-52  font-medium h-14 rounded-3xl '>Next</button>
       </div>
       <Navbar/>
    </div>
  )
}
