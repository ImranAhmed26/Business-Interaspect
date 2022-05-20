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
import image7 from '../public/images/services/background-remove.jpg'
import image8 from '../public/images/services/manupulation.jpg'

const servicesData = [
  {image: image1, content: 'Clipping path/Cutout Image'},
  {image: image2, content: 'Color correction'},
  {image: image3, content: 'Photo retouching'},
  {image: image4, content: 'Image masking'},
  {image: image5, content: 'Neck joint'},
  {image: image6, content: 'Drop shadow'},
  {image: image7, content: 'Background Remove'},
  {image: image8, content: 'Image manipulation'},
]

const Service = () => {
  SwiperCore.use([Autoplay])

  return (
    <div>
      <div className='bg-gradient-to-r from-sky-800 to-sky-900 py-10 px-60 '>
        <div className='text-2xl sm:text-3xl font-semibold text-gray-100 drop-shadow-md'>
          Our Services
        </div>
        <div className='flex'>
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            speed={1000}
            centeredSlides={false}
            autoHeight={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='text-white text-center text align-middle ml-10 mt-10 mySwiper'
          >
            {servicesData.map(({image, content, index}) => (
              <SwiperSlide>
                <div className=' w-[42rem] h-[32rem] bg-slate-800 rounded-lg align-middle text-2xl text-center py-4 px-3'>
                  <Image
                    src={image}
                    key={index}
                    alt={'heading'}
                    width={800}
                    height={500}
                  />
                  <h1 className='pt-3'>{content}</h1>
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
