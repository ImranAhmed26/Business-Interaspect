export default function ContactUs() {
  return (
    <>
      <div className='mt-20'>
        <h2 className=' text-center text-4xl font font-extrabold tracking-tight text-sky-800 sm:text-6xl'>
          Get in touch with us
        </h2>

        <h2 className='text-center mt-4 text-xl text-gray-500'>
          Please leave us your email ID and phone number so that we can reach
          you.
        </h2>
      </div>
      <div
        id='contactus'
        className=' max-w-5xl mx-auto pb-20 px-4 sm:px-6 rounded-xl drop-shadow-lg gap-8 lg:my-0'
      >
        <div className=''>
          <form className='  mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <div className='mb-5 w-full'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                  />
                </div>
                <div className='mb-5 w-full '>
                  <input
                    type='email'
                    placeholder='Your Email'
                    className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                  />
                </div>
                <div className='mb-6 w-full'>
                  <input
                    type='text'
                    placeholder='Your Phone'
                    className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                  />
                </div>
              </div>
              <div>
                <div className='mb-6 w-full '>
                  <textarea
                    rows='4'
                    placeholder='Your Message'
                    className='
                        w-full
                        rounded
                        py-2
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                  ></textarea>
                </div>

                <div>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 focus:outline-none '
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
