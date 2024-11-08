import { useState } from 'react';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center h-full my-4 mt-8 bg-neutral-900 p-6 rounded-lg">
      <div className="flex items-center justify-between w-full max-w-4xl">
        
        {/* Left Button */}
        <button className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md cursor-pointer text-center" aria-label='Previous'>
             Prev
        </button>

        {/* Card */}
        <div
          className="relative w-[250px] h-[320px] cursor-pointer perspective-1000 mx-20"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-[#333] backface-hidden rounded-lg"
            >
              <p>Front Text</p>
            </div>
            
            {/* Back Side */}
            <div
              className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-[#333] backface-hidden rotate-y-180 rounded-lg"
            >
              <p>Back Text</p>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <button className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
        aria-label='Next'>
               Next
       </button>
      </div>
    </div>
  );
};

export default CardFlip;



// import React,{useState} from 'react'

// const Display = () => {
//   return (
//     <div className='border w-[90vw] h-[35vh] m-auto rounded-md flex flex-col justify-between items-center'>
//       <div className='flex-grow flex items-center justify-center'>

//       </div>
//       <div className="flex justify-between w-full px-4 mb-4">
//         <button className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-4 rounded-md cursor-pointer text-center">
//           Prev
//         </button>
//         <button className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-4 rounded-md cursor-pointer text-center">
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Display

