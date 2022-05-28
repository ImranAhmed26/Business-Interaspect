const EditSteps = () => {
  return (
    <div className='bg-gray-100'>
      <div className='grid grid-cols-1 lg:grid-cols-5 px-6 sm:px-12  md:px-28 lg:px-10 xl:px-24 2xl:px-60 py-10'>
        <div className='col-span-2 flex flex-col justify-center py-4 lg:py-4'>
          <h1 className='text-2xl md:text-5xl font-semibold text-gray-700'>
            Get Photo Editing Services
          </h1>
          <div className='w-96 md:w-[32rem] lg:w-96 h-1 bg-gradient-to-l from-gray-600 to-sky-700 mt-3 md:my-6 lg:my-10 '></div>
          <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold text-sky-900 pb-4'>
            In 4 simple steps
          </h1>
        </div>
        <div className=' grid grid-cols-2 col-span-3 text-center text-2xl lg:text-2xl xl:text-4xl font-light drop-shadow-lg'>
          <div className=' h-60 bg-white text-gray-800 hover:bg-sky-800 hover:text-white transition-all duration-150'>
            <h1 className=' px-3 py-10 md:py-12 md:px-12 xl:px-5'>
              1. Request a quote for the images you need edited
            </h1>
          </div>
          <div className=' h-60 bg-sky-800  text-white hover:bg-white hover:text-gray-800 transition-all duration-150'>
            <h1 className='px-3 py-10 md:py-12 md:px-12 xl:px-5 ' >
              2. Receive an email with your quote in 45 minutes or less
            </h1>
          </div>
          <div className='text-white h-60 bg-sky-800 hover:bg-white hover:text-gray-800 transition-all duration-150'>
            <h1 className='  px-3 py-10 md:py-12 md:px-12 xl:px-5'>
              3. Give us the green light to move forward with your project
            </h1>
          </div>
          <div className='text-gray-800 h-60 bg-white hover:bg-sky-800 hover:text-white transition-all duration-150'>
            <h1 className='  px-3 py-10 md:py-12 md:px-12 xl:px-5'>
              4. Get your images in as little as six hours
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditSteps
