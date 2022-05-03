// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='text-white text-center text align-middle ml-10 mt-10'
    >
      <SwiperSlide>
        <div className=' w-72 h-80 bg-slate-800 rounded-lg align-middle text-2xl text-center py-4 px-3'>
          <h1>
            Image editing services for ecommerce businesses and professionals,
            from product photographers to Amazon sellers to global brands.
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg  align-middle text-2xl text-center py-4 px-3'>
          Every edit is done by a professional re-toucher, not by machine, to
          achieve high quality clean edges.
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg text-2xl  align-middle text-center py-4 px-3'>
          24/7-365 Client Support
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg  align-text- text-2xl text-center py-4 px-3'>
          Slide3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-72 h-80 bg-slate-800 rounded-lg text-2xl text-center py-4 px-3'>
          Slide4
        </div>
      </SwiperSlide>
      <h1 className='text-2xl font-semibold text-black'>...</h1>
    </Swiper>
  )
}
