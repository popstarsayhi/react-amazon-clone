import React from 'react'
import '../../css/BestSeller.css'
import {bestSellerData} from './ProductData'

function BestSeller() {
  return (
    <div className='bestseller_container'>
        <div className='bestseller_card'>
        <h2 className="bestseller_info">Best Sellers in Home</h2> 
           <div className='bestseller_image'>
            <img src={bestSellerData[0].image}/>
            <p>AmazonBasics Light-Weight Micrifiber Sheet Set -<br/>Queen, Black</p>
            <p >$ <span style={{fontSize:'18px',fontWeight: 'bold'}}>27</span>05</p>
            </div> 

            <div className='bestseller_smallimage'>
                <img src="https://m.media-amazon.com/images/I/611owqbxXmL._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/71Z2A8ByzIL._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/517XhyL864L._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY110_.jpg" alt="" />
            </div> 
        </div>

        <div className='bestseller_card'>
        <h2 className="bestseller_info">Frequently repurchased in <br/> Supplies</h2> 
           <div className='bestseller_image'>
            <img src={bestSellerData[1].image}/>
            <p>HP 58A (CF258A) Black Original Toner Cartridge</p>
            <p >$ <span style={{fontSize:'18px',fontWeight: 'bold'}}>140</span>99</p>
            </div> 

            <div className='bestseller_smallimage'>
                <img src="https://m.media-amazon.com/images/I/612S0UdQfvL._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/71Z2A8ByzIL._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/81ipzpnjDkL._AC_SY110_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/81Tb7+8JONL._AC_SY110_.jpg" alt="" />
            </div> 
        </div>

        <div className='bestseller_card'>
        <h2 className="bestseller_infoadd">The Peripheral | Watch teaser</h2> 
           <div className='bestseller_imageadd'>
            <img src={bestSellerData[2].image}/>
            </div> 
            <a href="#">Watch now on Prime Video</a>
        </div>

        <div className='bestseller_card'>
        <h2 className="bestseller_infoadd">Blink Mini</h2> 
           <div className='bestseller_imageadd'>
            <img src={bestSellerData[3].image}/>
            </div> 
            <a href="#">Discover more</a>
        </div>
    </div>
  )
}

export default BestSeller