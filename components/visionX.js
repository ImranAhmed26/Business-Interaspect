const Vision = () => {
  return (
    <div className='bg-gray-100 px-10 md:px-20 xl:px-32 2xl:px-60  py-20'>
      <div className=' my-10 text-center text-4xl text-gray-800'>
        <div className='text-2xl sm:text-3xl font-semibold  text-gray-700'>
          Our Vision and Philosophy
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch text-center gap-6 lg:gap-16 text-gray-700 lg:py-10'>
        <div className='min-w-[50%] bg-gradient-to-r from-cyan-200 to-teal-300 max-w-xl rounded-sm py-4 px-4 drop-shadow-lg'>
          <h1 className="text-2xl font-medium pb-5 ">Our Vision</h1>
          <h1 className='text-xl'>
            The vision of Business Interaspect is to be the most reliable and
            innovative Image post production outsourcing firm by taking due care
            of all of our constituents, particularly the clients, workforce, and
            the partners.
          </h1>
        </div>
        <div className='min-w-[50%] bg-gradient-to-r from-cyan-200 to-teal-300 max-w-xl rounded-sm py-4 px-4 drop-shadow-lg'>
          <h1 className='text-2xl font-medium pb-5 '>Our Philosophy</h1>
          <h1 className='text-xl'>
            The firm’s philosophy is to perform with proper accountability and
            achieve highest ethical and quality standards in image editing
            activities.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Vision

