import React,{ useState } from 'react'
import '../../css/ProductCarousel.css'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "grey", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "grey", fontSize: "30px" }} />
      </div>
    );
  };
  

function ProductCarousel({slides}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
    }
    
  return (
    <div className='product_carousel'>
    <div className='product_carousel_header'>
        <span>Today's deals</span>
        <a href="#">See all deals</a>
    </div>

    <div className="product_slider">
  
    <Slider {...settings} 
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}>

    {slides.map((slide,index) => (
          <div className="product_card" key={index}>
               <img src={slide.image} alt="" />
            <div className="card-bottom">
                <span className='product_bottom_price'>{slide.price}</span>
                <span className='product_bottom_deal'>{slide.deal}</span>
                <div className='product_bottom_category'>{slide.category}</div>
            </div>
          </div>
        ))}

    </Slider>
    </div>
    </div> 
  )
}

export default ProductCarousel


