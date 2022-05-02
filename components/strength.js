import SlideComponent from './slide-component'

const Strength = () => {
  return (
    <div className='grid grid-cols-2 ite'>
      <div className='bg-red-400'>Strengths</div>
      <div className='bg-blue-500'>
        <SlideComponent />
      </div>
    </div>
  )
}

export default Strength
