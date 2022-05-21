import Image from 'next/image'
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
  // Autoplay,
  Pagination,
  Navigation,
} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/autoplay'
import SwiperCore, {Autoplay} from 'swiper'

import image1 from '../public/images/services/clipping.jpg'
import image2 from '../public/images/services/color.jpg'
import image3 from '../public/images/services/retouch.jpg'
import image4 from '../public/images/services/mask.jpg'
import image5 from '../public/images/services/neck-joint.jpg'
import image6 from '../public/images/services/drop-shadow.jpg'
import image7 from '../public/images/services/bgrm.jpg'
import image8 from '../public/images/services/manupulation.jpg'

const servicesData = [
  {
    image: image1,
    title: 'Clipping path/Cutout Image',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content. However, real text wil go here when defined',
  },
  {
    image: image2,
    title: 'Color correction',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content. Not a good practice',
  },
  {
    image: image3,
    title: 'Photo retouching',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content. ',
  },
  {
    image: image4,
    title: 'Image masking',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content.',
  },
  {
    image: image5,
    title: 'Neck joint',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content.',
  },
  {
    image: image6,
    title: 'Drop shadow',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content.',
  },

  {
    image: image8,
    title: 'Image manipulation',
    content:
      'lorem Ipsum general text used as dummy text for testing purpose with no relevent content.',
  },
]

const Service = () => {
  SwiperCore.use([Autoplay])

  return (
    <div>
      <div className='bg-gradient-to-r from-sky-800 to-sky-900 py-10 px-60 '>
        <div className='text-2xl sm:text-5xl font-semibold text-gray-100 drop-shadow-md'>
          Our Services
        </div>
        <div className='flex'>
          <Swiper
            spaceBetween={2}
            slidesPerView={4}
            loop={true}
            speed={1000}
            centeredSlides={false}
            autoHeight={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='text-left text-gray-800  text align-middle ml-10 mt-10 mySwiper'
          >
            {servicesData.map(({image, title, content, index}) => (
              <SwiperSlide key={index}>
                <div className=' w-[20rem] h-[32rem] bg-white rounded-sm align-middle text-2xl  '>
                  <Image src={image} alt={'heading'} width={400} height={250} />
                  <h1 className='py-3 px-3 text-xl font-normal'>{title}</h1>
                  <div className='w-64 h-0.5 bg-sky-800 mx-3'></div>
                  <h2 className='py-3 px-3 text-lg font-light'>{content}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
export default Service
