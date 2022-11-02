import React, { useState } from 'react'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import '../../css/ImageCarousel.css'

function ImageCarousel({slides}) {

  const[currentImage, setCurrentImage] = useState(0)
  
  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  const length = slides.length
  const images = slides.map((slide, index) => <img src={slide.image} className="slider-image"/> );

  const nextSlide = ()=>{
    setCurrentImage(currentImage === length -1 ? 0: currentImage +1)
  }

  const prevSlide = ()=>{
    setCurrentImage(currentImage === 0? length -1 : currentImage -1)
  }

  return (
    <div className='slider'>
      <ArrowBackIosOutlinedIcon className='left-arrow' onClick={prevSlide}/>
      <ArrowForwardIosOutlinedIcon className='right-arrow' onClick={nextSlide}/>
      {images[currentImage]}
    </div>
  )
}

export default ImageCarousel

// {slides.map((slide,index)=>{
//   return(
//     <div className={index === currentImage? 'slide active': 'slide'} key={index} display={index === currentImage ? 'block' : 'none'}>
//       {/* {index === currentImage && ( <img src={slide.image} className="slider-image"/>)} */}
//     </div>
//   )
// })}