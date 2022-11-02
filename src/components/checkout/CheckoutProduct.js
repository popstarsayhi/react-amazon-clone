import React from 'react'
import "../../css/CheckoutProduct.css"
import { useStateValue } from '../checkout/StateProvider'

function CheckoutProduct({id, image, title, price, rating,quantity}) {
 
  const [{basket}, dispatch]=useStateValue();

  //console.log(basket)

    const removeFromBasket=()=>(
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    )

    const increase =()=>{
      dispatch({
        type:'ADD_QUANTITY',
        id:id
    })
    }

    const decrease =()=>{
      dispatch({
        type:'SUB_QUANTITY',
        id:id
    })
    }


  return (
    <div className="checkoutProduct">
    <img className="checkoutProduct__image" src={image} alt={title} />
    <div className="checkoutProduct__info">
      <p className="checkoutProduct__title">{title}</p>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="checkoutProduct__rating">
        {Array(parseInt(rating)).fill().map(()=>(
            <p>🌟</p>
        ))}
      </div>
      <div className='quantity_details'>
      <span>Qty:</span>
      <button onClick={decrease}>-</button>
      <span className='quantity'>{quantity}</span>
      <button className='decrease' onClick={increase}>+</button>
      <button onClick={removeFromBasket} className="remove">Remove from Basket</button>
      </div>
    </div>
  </div>
  )
}

export default CheckoutProduct