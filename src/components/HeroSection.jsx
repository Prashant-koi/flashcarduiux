

const HeroSection = () => {
  return (
    <div>
        <div className="flex flex-col items-center mt-2 lg:mt-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Turn your PDFs 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}to Flashcards!

                </span>
            </h1>
            <p className="mt-10 text-lg texxt-center text-neutral-500 max-w-4xl">
                Empower your Knowladge by making Flashcards from specific PDFs you provide and in the topics you want to study on.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                Upload PDF
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Generate Flashcards
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection
