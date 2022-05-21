import Image from 'next/image'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

const SlideComponent = ({image, content, key}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='text-white text-center text align-middle ml-10 mt-10'
    >
      <SwiperSlide>
        <div className=' w-[25rem] h-[22rem] bg-slate-800 rounded-lg align-middle text-2xl text-center py-4 px-3'>
          <Image
            src={image}
            key={key}
            alt={'heading'}
            width={600}
            height={400}
          />
          <h1 className='pt-3'>{content}</h1>
        </div>
      </SwiperSlide>

      {/* <h1 className='text-2xl font-semibold text-black'>...</h1> */}
    </Swiper>
  )
}

export default SlideComponent 
