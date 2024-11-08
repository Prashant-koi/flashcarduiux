import { useState } from 'react';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center h-full my-4">
      <div
        className="relative w-[250px] h-[320px] cursor-pointer perspective-1000"
        onClick={handleClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-[#333] backface-hidden"
          >
            <p>Front Text</p>
          </div>
          
          {/* Back Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-[#333] backface-hidden rotate-y-180"
          >
            <p>Back Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
