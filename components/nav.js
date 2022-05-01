import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'

const Nav = () => {
  return (
    <div className='bg-gray-50 text-4xl text-centerfont-bold'>
      <div>
        <div className='container mx-auto px-6 flex items-center justify-between h-24 '>
          <div className='uppercase text-gray-500 font-black text-3xl '>
            <Image src={Logo} width={260} height={70} />
          </div>
          <div className='flex items-center'>
            <div className='font-sen text-gray-900 uppercase text-base lg:flex font-medium items-center hidden'>
              <a href='#' className='py-2 px-4 flex hover:text-blue-600'>
                Home
              </a>
              <a href='#' className='py-2 px-4 flex hover:text-blue-600'>
                Vision
              </a>
              <a href='#' className='py-2 px-4 flex hover:text-blue-600'>
                Our Strengths
              </a>
              <a href='#' className='py-2 px-4 flex hover:text-blue-600'>
                Contact Us
              </a>
              <a href='#' className='py-2 px-4 flex hover:text-blue-600'>
                Carrer
              </a>
            </div>
            <button className='lg:hidden flex flex-col ml-4'>
              <span className='w-6 h-1 bg-gray-800 mb-1'></span>
              <span className='w-6 h-1 bg-gray-800 mb-1'></span>
              <span className='w-6 h-1 bg-gray-800 mb-1'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
