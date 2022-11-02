import React ,{useRef} from 'react'
import ImageCarousel from './ImageCarousel'
import { sliderData,TopDealData,tobuyData,booksData,tobuyDataAdd} from './ProductData'
import NavBar from './NavBar'
import Products from './Products'
import '../../css/home.css'
import ProductCarousel from './ProductCarousel'
import Tobuy from './Tobuy'
import BestSeller from './BestSeller'
import BookCarousel from './BookCarousel'
import FooterSignin from '../footer/FooterSignin'

function Home() {

  return (
    <div className='home'>
    <NavBar/>  
    <ImageCarousel slides={sliderData}/>   
    <Products/> 
    <BestSeller/>
    <ProductCarousel slides={TopDealData}/>
    <Tobuy slides={tobuyData}/>
    <BookCarousel slides={booksData }/>
    <Tobuy slides={tobuyDataAdd}/>
    <div className='advertisement'>
      <a href='https://www.lysol.ca/en/healthy-schools/'><img src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a7e7a83e-edc6-4205-92fe-4d42c1dffaa6.jpg" alt="" /></a>
    </div>
    <FooterSignin/>
    </div>
  )
}

export default Home