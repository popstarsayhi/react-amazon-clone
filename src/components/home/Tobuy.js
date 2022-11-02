import React from 'react'
import '../../css/Tobuy.css'
import { useStateValue } from '../checkout/StateProvider'


function Tobuy({slides}) {

  const[{basket}, dispatch] = useStateValue()

  //console.log(basket)

  const addToBasket = (slide)=>{
    //dispatch the item into data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:slide.id,
        title:slide.title,
        image:slide.image,
        price:slide.price,
        rating:slide.rating
      }
    })
  }

  return (
    <div className='tobuy_row'> 
             {slides.map((slide,index)=>{
                 return(
                    <div className='tobuy' key={index}>
                    <div className="tobuy_info" >
                        <p>{slide.title}</p>
                        <p className='tobuy_price'>
                            <small>$</small>
                            <strong>{slide.price}</strong>
                        </p>
                        <div className='tobuy_rating'>
                         {Array(parseInt(slide.rating)).fill().map(()=>(
                            <p>🌟</p>
                          ))}
                        </div>
                    </div>
                    <img src={slide.image} alt="" />
                    <button onClick={()=>addToBasket(slide)}>Add to Basket</button>
                 </div>)
             })}
    </div> 
  )
}

export default Tobuy

{/* <button onClick={()=>dispatch(
  {type:"ADD_TO_BASKET", 
  item:{image:slide.image, 
        price:slide.price}
  })}>Add to Basket</button> */}

