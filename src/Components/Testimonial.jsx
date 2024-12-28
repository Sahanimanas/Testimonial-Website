import React, { useState } from "react";
import Card from "./Card.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaChevronRight,FaChevronLeft } from "react-icons/fa";


const Testimonial = (props) => {
   const review=props.review;
   const [index,setIndex]=useState(0);
   function lefthandeler(){
  
    if(index-1<0){
        setIndex(review.length-1);
    }
    else setIndex(index-1);
   }
   function righthandeler(){
    if(index+1>review.length-1){
        setIndex(0);
    }
    else setIndex(index+1);
   }

   function surprisehandler(){
    let rendomind=Math.floor(Math.random()*review.length)
    setIndex(rendomind)
   }
   

    return (
        <div className="w-[85vw] md:w-[700] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review={review[index]}></Card>
           
            <div className="mt-[20] text-violet-600 mx-auto text-center">

            <button
            onClick={lefthandeler} 
            className="h-4 cursor-pointer mr-3"><FiChevronLeft/></button>
            <button onClick={righthandeler}><FiChevronRight/></button>
            </div>
            <div className="mt-[20] text-violet-600 mx-auto text-center">
                <button 
                onClick={surprisehandler}
                className="bg-violet-600 rounded-md text-white w-24 ">Surprise me</button>
            </div>
        </div>
        
    )

};

export default Testimonial;
