import Image from 'next/image'

import image1 from '../public/icons/icon1.png'
import image2 from '../public/icons/icon2.png'
import image3 from '../public/icons/icon3.png'
import image4 from '../public/icons/icon4.png'
import image5 from '../public/icons/icon5.png'
import image6 from '../public/icons/icon6.png'
import image7 from '../public/icons/icon7.png'
import image8 from '../public/icons/icon8.png'

const uniqueStrengthsData = [
  {
    image: image1,
    content:
      'Image editing services for ecommerce businesses and professionals, from product photographers to Amazon sellers to global brands.',
  },
  {
    image: image4,
    content:
      'Every edit is done by a professional re-toucher, not by machine, to achieve high quality clean edges.',
  },
  {image: image3, content: '24/7-365 Client Support'},
  {image: image2, content: 'Professional Quality Controller'},
  {image: image7, content: 'High Speed Internet Connection'},
  {image: image6, content: '100% Data Safety'},
  {image: image5, content: 'Quick Delivery Turnaround'},
  {image: image8, content: 'You’re Satisfaction Guarantee'},
]

const Strength = () => {
  return (
    <div className='py-10 lg:py-20 '>
      <div className='text-left md:text-center lg:py-10 px-10'>
        <h1 className='text-2xl sm:text-5xl font-semibold drop-shadow-sm text-gray-700'>
          Our Unique Strengths
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12  md:px-28 lg:px-10 xl:px-24 2xl:px-60 py-10 gap-8'>
        {uniqueStrengthsData.map(({image, content}, index) => (
          <div key={index} className='grid grid-cols-8 items-center gap-2'>
            <div className='col-span-1'>
              <Image src={image} width={70} height={70} alt={'strengths'}/>
            </div>
            <div className='col-span-6 '>
              <h1>{content}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Strength
