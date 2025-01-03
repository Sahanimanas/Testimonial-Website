import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
      
      <div className="bg-violet-400 h-[4px] w-[100px] mt-1 mx-auto rounded-md"></div></div>
      <Testimonial review={reviews} />
     
    </div>
  )
};

export default App;
