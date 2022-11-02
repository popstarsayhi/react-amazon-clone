import React from 'react'
import '../../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStateValue } from '../checkout/StateProvider';
import {getBasketTotal} from './Reducer'
import {useNavigate} from 'react-router-dom'

function Subtotal() {

const [{basket}, dispatch] = useStateValue();
const navigate = useNavigate() //provide the browser history

//console.log(basket)


  return (
    <div className='subtotal'>
    <CurrencyFormat
        renderText={(value) => (
            <>  
                <div className="subtotal_title">
                    <CheckCircleIcon style={{color:'green'}}/>
                    <p>
                    <span style={{color:'green'}}>Your first order qualifies for FREE Delivery (excludes remote locations).</span>
                    <span>Select this option at checkout.</span> <span style={{color:'green'}}>Details</span>
                    </p>
                </div>
                <p style={{fontSize:'20px'}}>
                Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift" >
                    <input type="checkbox" /> 
                    This order contains gifts
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator = {true}
        prefix={"$"}
    /> 
    <button onClick={ e=>navigate('/payment') }>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
