

import { useRef, useState } from 'react';
import axios from 'axios';
import pdfToText from 'react-pdftotext'


const UploadPdf = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [pdfText, setPdfText] = useState('');


  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function extractText(event) {
    const file = event.target.files[0]
    pdfToText(file)
        .then(text => setPdfText(text))
        .catch(error => console.error("Failed to extract text from pdf"))
}

  const handleGenerateFlashcards = async () => {
    if (!pdfText) {
      console.log("No text extracted from PDF.");
      return;
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful assistant that generates flashcards in a Q&A format based on provided content.',
            },
            {
              role: 'user',
              content: `Generate flashcards from the following text:\n${pdfText}`,
            },
          ],
          max_tokens: 500,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const flashcards = response.data.choices[0].message.content;
      console.log("Flashcards:", flashcards);
    } catch (error) {
      console.error("Error generating flashcards:", error);
    }
  };

  return (
    <div className="flex flex-col items-center my-10">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
        onChange={extractText}
      />

      <div className="flex space-x-4">
        <button
          onClick={handleFileClick}
          className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
        >
          Choose PDF File
        </button>

        <button
          onClick={handleGenerateFlashcards}
          className="text-[0.7rem] sm:text-[0.8] md:text-sm py-2 px-4 rounded-md border cursor-pointer text-white border-white text-center"
        >
          Generate Flashcards
        </button>
      </div>

      {fileName && (
        <p className="text-[0.7rem] sm:text-[0.75rem] md:text-sm lg:text-base mt-4 text-gray-400 text-center mx-2">
          Selected file: <span className='italic'>{fileName}</span>
        </p>
      )}
    </div>
  );
};

export default UploadPdf;

