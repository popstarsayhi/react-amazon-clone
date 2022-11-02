import React, { useRef} from 'react'
import "../../css/Popup.css"


function Popup({popUpLocation}, {setPopUpLocation}) {

  const popupRef = useRef()

  const closePopup = e =>{
      if(popupRef.current === e.target){
          setPopUpLocation(false)
      }
  }


  return (
    <>
    {popUpLocation ? (
     <div className='popup_main' ref={popupRef} onClick={closePopup}>
     <div className='popup_container' onClick={ e=> e.stopPropagation()}>
         <div className='popup_header'>
             <p>Choose your location</p></div>
         <div className='popup_body'>
             <p>Delivery options and delivery speeds may vary for different <br/>locations</p>
             <button>Sign in to see your address</button>
             <p>or enter a Canada post code</p>
         </div>
         <div className='popup_footer'>
             <input className="popup_input" type="text"/>
             <input className="popup_input" type="text" />
             <button>Apply</button>
         </div>
      </div>
      </div>):null} 
         
    </>
  )
}

export default Popup

