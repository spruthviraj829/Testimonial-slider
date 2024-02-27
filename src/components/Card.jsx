import React from 'react'
import { FaBeer ,FaQuoteLeft , FaQuoteRight ,FaGem } from "react-icons/fa";

const Card = (props) => {

    let  review =props.review;
  return (
    <div className="flex flex-col md:relative">


       <div className='absolute top-[-7rem] z-20' >
        <img  className="aspect-square rounded-full w-28 h-28 z-120"
        src={review.image} alt="" />
         <div className='rounded-full w-28 h-28 z-120 bg-violet-500 absolute top-[-10px] left-[0.75rem] z-[-1]'> </div>
       </div>

       <div>
        <p className="text-center mt-7 font-bold text-2xl capitalize tracking-normal">{review.name}</p>
       </div>

       <div>
        <p className="text-center  text-violet-300 uppercase">{review.job} </p>
       </div>

       <div className="text-center mx-auto text-violet-500 mt-5">
        <FaQuoteLeft/>
       </div>

       <div>
           {review.text}
       </div>

       <div className="text-center mx-auto text-violet-500 mt-5">
        <FaQuoteRight/>
       </div>


       
    </div>
  )
}

export default Card
