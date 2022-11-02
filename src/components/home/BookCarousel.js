import React from 'react'
import '../../css/BookCarousel.css'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function BookCarousel({slides}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
    }
    
  return (
    <div className='books_carousel'>
    <div className='books_carousel_header'>
        <span>Most wished for in Books</span>
    </div>

    <div className="books_slider">
  
    <Slider {...settings} >
   
    {slides.map((slide,index) => (
          <div className="books_card" key={index}>
               <img src={slide.image} alt="" />
          </div>
        ))}

    </Slider>
    </div>
    </div> 
  )
}

export default BookCarousel


