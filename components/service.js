import SlideComponent from './slide-component'
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

const Service = ({image, content}) => {
  return (
    <div>
      <div className='bg-gradient-to-r from-sky-800 to-sky-900 py-10 px-60'>
        <div className='text-2xl sm:text-3xl font-semibold text-gray-100 drop-shadow-md'>
          Our Services
        </div>
        <div>
          {servicesData.map(({image, content, index}) => (
            <SlideComponent image={image} content={content} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Service
