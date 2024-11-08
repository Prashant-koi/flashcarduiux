import { useRef, useState } from 'react';

const UploadPdf = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-center my-10">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
        onChange={handleFileChange}
      />

      {/* Container for the buttons */}
      <div className="flex space-x-4">
        {/* Custom button for file input */}
        <button
          onClick={handleFileClick}
          className="bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-3 px-4 rounded-md cursor-pointer"
        >
          Choose PDF File
        </button>

        {/* Generate Flashcards button */}
        <a
          href="#"
          className="py-3 px-4 rounded-md border cursor-pointer text-white border-white"
        >
          Generate Flashcards
        </a>
      </div>

      {/* Display selected file name */}
      {fileName && (
        <p className="mt-4 text-gray-400">
          Selected file: {fileName}
        </p>
      )}
    </div>
  );
};

export default UploadPdf;
