import React, {useEffect, useState} from 'react'
import "../../css/Payment.css"
import { useStateValue } from './StateProvider'
import Address from './Address'
import {getBasketTotal, getTax} from './Reducer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link, useNavigate} from 'react-router-dom'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";
import {db} from '../../firebase'


const monthNames = ["January", "February", "March", "April", "May", "June","July", 
                    "August", "September", "October", "November", "December"];

const weekdays =['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Staurday','Sunday']

function Payment() {

    const [{basket, user, address, dev}, dispatch] = useStateValue()

    //console.log(address.length)
    //console.log(Number(Object.values(dev)))

    const[popUpLocation, setPopUpLocation] = useState(false)

    const currentDate = new Date()

    const month = monthNames[currentDate.getMonth()]
    const sevenDay = `${currentDate.getDate()+7}`
    const eigthDay = `${currentDate.getDate()+8}`
    const weekday = weekdays[currentDate.getDay()-1]
    const nextday = weekdays[currentDate.getDay()]


    const arr = [weekday, ', ' , month, sevenDay, ' - ' , nextday, ', ' , month, eigthDay]
    const arr2 = [nextday, ', ' , month ,eigthDay]
    const arr3 = [weekday, ', ', month, currentDate.getDate(), ' - ', nextday, ', ', month, eigthDay]


    const [checked, setChecked] = useState()

    const handleAddDev =(e) =>{
        // e.preventDefault()
        setChecked(e.target.value)

        dispatch({
            type:'ADD_DEV',
            item:{
                price: e.target.getAttribute("label")
            }
          })
    }

    const stripe = useStripe()
    const elements = useElements()

    const[error, setError] = useState(null)
    const[disabled, setDisabled] = useState(true)
    const[processing, setProcessing] = useState("")
    const[succeeded, setSucceeded] = useState(false)
    const[clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
          const response = await axios({
            method: "post",
            //stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          })
          setClientSecret(response.data.clientSecret);
        }

        getClientSecret()
      }, [basket])

      //console.log('The secrect is>>>', clientSecret)
      //console.log(user.uid)

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setProcessing(true)

        const playload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })
            
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })
            navigate("/orders");
        })
    }

    const handleChange = e=>{
        setDisabled(e.empty)
        setError(e.error? e.error.message :"")
    }

  return (
    
    <div className='payment'>
        <Link to= '/'>
        <div className='payment_log'>
            <img src="https://m.media-amazon.com/images/G/15/x-locale/checkout/confirm-banner._CB485922780_.gif" alt="" />
        </div>
        </Link>
        <div className='payment_container'>
            <div className='payment_left'>
            <h2>Review your order</h2>
                <div className='payment_section'>
                    <div className='payment_main'>
                        <div className='payment_email'>
                            <h4>Email Address : </h4> <span>{user?.email}</span>
                        </div>
                        <div className='payment_main_title'>
                        <div className='payment_title'>
                            <h4>Shipping Address：</h4>
                            <small onClick={()=>{setPopUpLocation(!popUpLocation)}} >
                                {address.length === 0? 'Add Address' : null}
                            </small > 
                            <Address popUpLocation={popUpLocation} setPopUpLocation={setPopUpLocation}/>
                        </div>
                        <div className='payment_address_title'>
                            <h4>Payment Address：</h4>
                            <small onClick={()=>{setPopUpLocation(!popUpLocation)}} >
                                {address.length === 0? 'Add Address' : 'Same as shipping address'}
                            </small > 
                            
                        </div>
                        </div>
                        
                            {address && address.map((item,index)=>{
                                return(
                                    <div className='payment_address' key={index}>
                                        <div className='payment_address_row'>
                                        <h5>Appartment/ House No. :</h5>
                                        <span>{item.apart}</span>
                                        </div>
                                        <div className='payment_address_row'>
                                        <h5>Street :</h5>
                                        <span>{item.street}</span>
                                        </div>
                                        <div className='payment_address_row'>
                                        <h5>City :</h5>
                                        <span>{item.city}</span>
                                        </div>
                                        <div className='payment_address_row'>
                                        <h5>Province :</h5>
                                        <span>{item.prov}</span>
                                        </div>
                                        <div className='payment_address_row'>
                                        <h5>Zip Code :</h5>
                                        <span>{item.zip}</span>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>


                <div className='payment_section'>
                    <div className='payment_main'>
                        <div className='payment_prime'>
                            <div className='payment_primetitle'>
                                <span>Try Prime Free</span>
                            </div>
                            <div className='payment_primebody'>
                            <div className='payment_primebody_right'>
                                <p><strong>{user?.email.split('@')[0]}, we're giving you a 30-day FREE trial of <br/> Amazon Prime.</strong></p>
                                <p><small>Enjoy FREE Prime Delivery on this order and receive eligible items {weekday}, {month} {sevenDay} with FREE Prime Delivery
                                    </small></p>
                            </div>
                            <div className='payment_primebody_left'>
                                <button>Try Prime <ChevronRightIcon className='payment_primebody_icon'/> </button>
                                <p>Cancel <br/> anytime</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_main'>
                        <div className='dev_title'>
                          Estimated delivery: {checked}
                        </div>
                        <form className='dev_list' onChange={handleAddDev}>
                            <div className='dev_list_check'>
                                <label>     
                                    <input type="radio" name="date" label="0" value={(arr.toString()).replaceAll(',',' ')} /> 
                                    FREE Prime Delivery with a free trial -- get it  - <span style={{color:'green'}}>{arr}</span>
                                </label>
                            </div>    
                            <div className='dev_list_check'>
                                <label>   
                            <input type="radio" name="date" label="5.42" value={(arr2.toString()).replaceAll(',',' ')}/>  
                                $5.42 Shipping — get it <span style={{color:'green'}}>{arr2}</span>
                                </label>
                            </div>
                            <div className='dev_list_check'>
                                <label>   
                                <input type="radio" name="date" label="7.42" value={(arr3.toString()).replaceAll(',',' ')}/>  
                                $7.42 Shipping — get it <span style={{color:'green'}}>{arr3}</span>
                                </label>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>

            <div className='payment_right'>
                <div className='order_summ'>
                    <h3>Order Summary:</h3>
                        <div className='order_summ_row'><p>Items: <span>$ {getBasketTotal(basket)}</span></p></div>
                        <div className='order_summ_row'><p>Total before tax:</p> <span>$ {getBasketTotal(basket)}</span></div>
                        <div className='order_summ_row'><p>Shipping & Handling:</p> <span>$ {Number(Object.values(dev))}</span> </div>
                        <div className='order_summ_row'><p>Estimated GST/HST:</p><span>$ {getTax(basket)} </span></div>
                    <div className='total_amount'>   
                        <h2>Total Amount: </h2> 
                        <span>$ {parseFloat(parseFloat(getBasketTotal(basket))+ 
                                 parseFloat(getTax(basket)) + 
                                 Number(Object.values(dev))).toFixed(2)
                                }
                        </span>
                    </div> 
                </div>

                <div className='order_summ'>
                    <h3>Payment Method:</h3>

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <button disabled={processing || disabled || succeeded}>
                            {processing ? <p>Processing</p> : "Place Your Order"}
                        </button>
                        <p>By placing your order, you agree to Aamazon's <br/>
                        <span style={{color:'#0066c0'}}>Privary notice</span> and  <span style={{color:'#0066c0'}}>conditon of use</span>
                        </p>
                        {error && <div>{error}</div>}
                    </form>
                    
                </div>

            </div>
        </div>

    </div>
  )
}

export default Payment