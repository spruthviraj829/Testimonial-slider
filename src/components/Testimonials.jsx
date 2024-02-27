import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft ,FiChevronRight} from "react-icons/fi"

const Testimonials = (props) => {
  let   reviews = props.reviews

  const [index ,setIndex] = useState(0)
  function leftHandler(){
    if(index-1<0){
         setIndex(reviews.length -1)
    }
    else{
        setIndex(index-1)
    }
  }

  function rightHandler(){
    if(index+1>=reviews.length){
         setIndex(0)
    }
    else{
        setIndex(index+1)
    }
}

function surpriseHandler(){
   let randomIndex= Math.floor(Math.random()*reviews.length );
   setIndex(randomIndex)
}
        
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
           mt-10 p-10 hover:shadow-xl rounded-md">

         <Card review={reviews[index]}></Card>
    
       <div className="flex text-3xl gap-3 text-violet-400 font-bold mx-auto items-center justify-center mt-5">
         <button onClick={leftHandler} className="cursor-pointer hover:text-violet-500 ">
            <FiChevronLeft/>
         </button>

         <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500'>
         <FiChevronRight/>
         </button>
       </div>

       <div>
        <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                          rounded-sm cursor-pointer py-2 px-10 font-bold text-white text-lg mt-3'>
            Surprise Me
        </button>
       </div>

    </div>
  )
}

export default Testimonials
