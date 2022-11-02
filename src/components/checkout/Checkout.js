import React from 'react'
import "../../css/Checkout.css"
import NavBar from '../home/NavBar'
import Subtotal from '../checkout/Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue()

  //console.log(basket)

  return (
    <>
    <NavBar/>
    <img className = "checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />
    <div className='checkout'>
        <div className="checkout_left">
            <div>
                <h2 className='checkout_title'>Shopping Cart</h2>   

                {basket.map((item) => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      rating={item.rating}
                      price={item.price}
                      quantity={item.quantity}
                />
                ))}
            
            </div> 
        </div>

        <div className="checkout_right">
           <Subtotal/>
        </div>
    </div>
    </>
  )
}

export default Checkout