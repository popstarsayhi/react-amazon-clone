import React, { useRef, useState} from 'react'
import "../../css/Address.css"
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../checkout/StateProvider'
import { TextField } from '@material-ui/core';

function Address({popUpLocation, setPopUpLocation}) {

    const popupRef = useRef()
      
    const closePopup = e =>{
        if(popupRef.current === e.target){
            setPopUpLocation(false)
        }
    }

    const[{address}, dispatch] = useStateValue()

    const[apart, setApart] = useState()
    const[street, setStreet] = useState()
    const[city, setCity] = useState()
    const[prov, setProv] = useState()
    const[zip, setZip] = useState()
    const[disable, setDisable] = useState(0)


        const handleSubmit = (e)=>{
            e.preventDefault()
            setDisable(true)
           // console.log(apart, street, city, prov, zip)
    
            dispatch({
                type:'ADD_ADDRESS',
                item:{
                    apart:apart,
                    street:street,
                    city:city,
                    prov:prov,
                    zip:zip
                }
              })
        }

  return (
      <>
        {popUpLocation ? (
     <div className='address_main' ref={popupRef} onClick={closePopup}>
     <div className='address_container' >
         <div className='address_header'>
             <p>Add Your Address</p>

             <CloseIcon className="address_icon" 
                        onClick={()=>{setPopUpLocation(!popUpLocation)}}/>
         </div>
         <div className='address_body' onClick={e=> e.stopPropagation()}>

             <form onSubmit={handleSubmit}>
                 <div className='address_input'>
                    <h5>Appartment/ House No. :</h5> 
                    <input type="text" name="apart" 
                           onChange={e=>setApart(e.target.value)}/>
                 </div>
                 <div className='address_input'>
                 <h5>Stree :</h5> 
                 <input type="text" name="street" 
                        onChange={e=>setStreet(e.target.value)}/>
                 </div>
                 <div className='address_input'>
                 <h5>City :</h5> 
                 <input type="text" name="city" 
                        onChange={e=>setCity(e.target.value)}/>
                 </div>
                 <div className='address_input'>
                 <h5>Province :</h5> 
                 <input type="text" name="prov" 
                        onChange={e=>setProv(e.target.value)}/>
                 </div>
                 <div className='address_input'>
                 <h5>Zip Code :</h5> 
                 <input type="text" name="zip" 
                        onChange={e=>setZip(e.target.value)}/>
                 </div>
                 <button className='address_addButton' type="submit" disabled={disable}>
                        Add
                 </button>
             </form>

         </div>

      </div>
      </div>):null} 
      </>
  )
}

export default Address