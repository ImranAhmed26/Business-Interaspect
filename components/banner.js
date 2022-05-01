const Banner = () => {
  return (
<div
      className=' bg-white relative overflow-hidden h-screen'
      id='banner'
    >
      <div className='h-screen bg-main-global  flex relative z-20 '>
        <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-12 md:py-40'>
          <div className='flex flex-col'>
            <h1 className='font-medium w-full uppercase text-center text-4xl sm:text-6xl xl:text-8xl text-gray-50'>
              Business Interaspect
            </h1>
            <h1 className='font-normal w-full uppercase text-center text-2xl  text-white pt-2'>
              Your image processing partner
            </h1>
            <h2 className='font-light max-w-5xl mx-auto w-full text-xl  text-gray-400 text-center pt-20'>
              {`Business Inter Aspect is an Image post production facility
              providing diverse services relating to image editing works. The
              expert panel of the firm is consists of a group of highly
              experienced professionals. Business Inter Aspect enjoys high
              reputation for in-depth industry understanding, need assessment of
              the client, and devising practical and optimum solutions. When it
              comes to solving any type of photo editing complication, WE’RE
              GAME!`}
            </h2>
            <div className='flex items-center justify-center mt-52'>
              <a
                href='#'
                className='uppercase py-2 px-4 bg-gray-800 border-2 border-gray-50 text-white text-md mr-4 hover:bg-blue-700 transition-all duration-150'
              >
                Contact Us
              </a>
              <a
                href='#'
                className='uppercase py-2 px-4 bg-transparent border-2 border-gray-50 text-white  hover:blue-700 hover:border-blue-700 hover:text-white text-md transition-all duration-150'
              >
                Get A Free Trial
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
