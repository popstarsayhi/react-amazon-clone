import React from 'react'
import "../../css/Order.css"
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'

function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='order_id'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item =>{
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                quantity={item.quantity}/>
        })}
    </div>
  )
}

export default Order