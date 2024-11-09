import { useState } from 'react';
import UploadPdf from './UploadPdf';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFlashcardsGenerated = (flashcards) => {
    setFlashcards(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const currentFlashcard = flashcards[currentIndex] || { front: 'No flashcards', back: 'No flashcards' };

  return (
    <div className="flex flex-col items-center justify-center h-full my-4 mt-8 bg-neutral-900 p-6 rounded-lg">
      <UploadPdf onFlashcardsGenerated={handleFlashcardsGenerated} />

      {flashcards.length > 0 && (
        <div className="flex items-center justify-between w-full max-w-4xl mt-4">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="text-[0.7rem] sm:text-[0.75rem] md:text-sm bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
            aria-label="Previous"
          >
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
              <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-white backface-hidden rounded-lg">
                <p>{currentFlashcard.front}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-white backface-hidden rotate-y-180 rounded-lg">
                <p>{currentFlashcard.back}</p>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="text-[0.7rem] sm:text-[0.75rem] md:text-sm bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
            aria-label="Next"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CardFlip;
