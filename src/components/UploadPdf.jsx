
// const UploadPdf = () => {
//   return (
    
//       <div className="flex justify-center my-10">
//                 <input type="file" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md file-hidden"  />
                
                
//                 <a href="#" className="py-3 px-4 mx-3 rounded-md border">
//                 Generate Flashcards
//                 </a>
//             </div>

//   )
// }

// export default UploadPdf




import { useRef } from 'react';

const UploadPdf = () => {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center my-10">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
      />

      {/* Custom button for file input */}
      <button
        onClick={handleFileClick}
        className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-4 mx-3 rounded-md cursor-pointer"
      >
        Choose PDF File
      </button>

      {/* Generate Flashcards button */}
      <a
        href="#"
        className="py-3 px-4 mx-3 rounded-md border cursor-pointer"
      >
        Generate Flashcards
      </a>
    </div>
  );
};

export default UploadPdf;
