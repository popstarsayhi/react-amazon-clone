import { Height } from '@material-ui/icons'
import React from 'react'
import '../../css/Product.css'
import { ProductData } from './ProductData'

const monthNames = ["January", "February", "March", "April", "May", "June","July", 
                    "August", "September", "October", "November", "December"];

function Products() {

    const currentDate = new Date()
    const month = monthNames[currentDate.getMonth()]
    const day = `${currentDate.getDate()}`
    const sevenDay = `${currentDate.getDate()+7}`

  return (
       
   <div className='product_row'>  

     <div className='product'>
        <h2 className="product_info">Today's deal</h2> 
            <img src={ProductData[0].image} />
            <div className='product_details'>
                <span className='product_sale'>Up tp -30%</span>
                <span className='product_deal'>Top deal</span>
            </div>
            <div className='porduct_name'>Van Houtte K-Cups</div>
            <div className='product_footer'>
                <a href="#" className='product_link'>See more deals</a>
            </div>
     </div>

     <div className='product'>
        <h2 className="product_info">Women's shoes</h2> 
           <div className='product_image'>
            <img src={ProductData[1].image}/>
            </div> 
            <div className='product_footer'>
                <a href="#" className='product_link'>Shop now</a>
            </div>
     </div>
     <div className='product'>
        <h2 className="product_info">Shop our Home décor store</h2> 
           <div className='product_image'>
            <img src={ProductData[3].image}/>
            </div> 
            <div className='product_footer'>
                <a href="#" className='product_link'>Shop now</a>
            </div>
     </div>
     <div className='product'>
        <h2 className="product_info">Prime Early Access Sale</h2> 
           <div className='product_image'>
            <img src={ProductData[2].image}/>
            </div> 
            <div className='product_footer'>
                <a href="#" className='product_link'> Shop deals {month} {day} - {sevenDay}</a>
            </div>
     </div>

    </div>  
  )
}

export default Products