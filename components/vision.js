import Image from 'next/image'

import VisionImage from '../public/images/vision/vision.png'
import PhilosophyImage from '../public/images/vision/philosophy.png'

const Vision = () => {
  return (
    <div>
      <div className='bg-white px-10 md:px-20 xl:px-32 2xl:px-60  pt-12'>
        <div className=' mt-10 text-center text-4xl text-gray-800'>
          <div className='text-left sm:text-center text-3xl sm:text-5xl font-semibold  text-gray-700'>
            Our Vision and Philosophy
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center text-center md:gap-6 lg:gap-16 text-gray-700 '>
          <div className='min-w-[50%] '>
            <Image width={600} height={600} src={VisionImage} alt={'vision'} />
          </div>
          <div className='min-w-[50%]  max-w-xl rounded-sm px-4 drop-shadow-lg '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium pb-5 '>
              Our Vision
            </h1>
            <h1 className='w-[100%] text-lg lg:text-2xl'>
              The vision of Business Interaspect is to be the most reliable and
              innovative Image post production outsourcing firm by taking due
              care of all of our constituents, particularly the clients,
              workforce, and the partners.
            </h1>
          </div>
        </div>
      </div>
      <div className='bg-white px-10 md:px-20 xl:px-32 2xl:px-60 '>
        <div className='flex flex-col md:flex-row justify-center items-center text-center gap-6 lg:gap-16 text-gray-700 '>
          <div className='min-w-[50%]  max-w-xl rounded-sm px-4 drop-shadow-lg order-last md:order-1'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium pb-5 md:pb-0'>
              Our Philosophy
            </h1>
            <h1 className='w-[100%] text-lg lg:text-2xl pb-10'>
              The vision of Business Interaspect is to be the most reliable and
              innovative Image post production outsourcing firm by taking due
              care of all of our constituents, particularly the clients,
              workforce, and the partners.
            </h1>
          </div>
          <div className='min-w-[50%] md:order-2 pt-8 px-8'>
            <Image
              width={460}
              height={460}
              src={PhilosophyImage}
              alt={'philosophy'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
