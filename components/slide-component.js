// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='text-white text-center text align-middle ml-10 mt-10' 
    >
      <SwiperSlide>
        <div className=' w-72 h-80 bg-slate-800 rounded-lg align-middle'>Slide1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg'>Slide1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg'>Slide1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg'>Slide1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg'>Slide1</div>
      </SwiperSlide>
      ...
    </Swiper>
  )
}
