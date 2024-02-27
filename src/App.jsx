import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reviews from './data'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='flex flex-col h-[100vh] w-[100vw] items-center justify-center bg-gray-200'>
         <div  className='text-center'>

              <h1 className='text-4xl font-bold' > Our Testimonials</h1>
              <div className='bg-violet-400 h-[4px] mt-1 w-1/5 mx-auto'></div>
              <Testimonials reviews={reviews}/>

         </div>

    </div>
  )
}

export default App
