import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Card = (props) => {
    const review = props.review;
    return (
        <div className="flex flex-col text-center md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img  className="aspect-square rounded-full  w-[140px] h-[140px] z-1 "
                src={review.image} />
                 <div className="  bg-violet-400 h-[140px] w-[140px] absolute rounded-full top-[-4px] z-[-1] left-[10px] "></div>
            </div>
        
            <div className="mt-7">
                <p className="font-bold text-2xl">{review.name}</p>
            </div>
            <div className="mt-1">
                <p className=" text-violet-700">{review.job}</p>
            </div>
            <div className="mx-auto  mt-7 text-violet-400">
                <FaQuoteLeft />
            </div>
            <div className="text-slate-700 mt-2">
                <p>{review.text}</p>
            </div>
           <div className="mx-auto mt-2 text-violet-400">
                <FaQuoteRight />
            </div>
        </div>
    );
};

export default Card;
