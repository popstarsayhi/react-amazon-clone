import React from 'react'
import '../../css/Header.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import {Link} from "react-router-dom"
import { useStateValue } from '../checkout/StateProvider';
import {auth} from '../../firebase'
import {useState} from 'react'
import {Departments} from './HeaderData'
import Popup from './Popup'

function Header() {

  const[{basket, user}, dispatch] = useStateValue()

  const handleAuthentication = () =>{
      if(user){
          auth.signOut()
      }
  }

  const[isActive, setIsActive] = useState(false)
  const[selected, setSelected] = useState("All")

  const[popUpLocation, setPopUpLocation] = useState(false)

  return (
    <div className='header'>
        <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className='header_location' onClick={()=>{setPopUpLocation(!popUpLocation)}}>
            <LocationOnOutlinedIcon className='header_locationIcon'/>
                <div className='header_loption_option'>
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineTwo'>Select your address</span>
                </div>
            <Popup popUpLocation={popUpLocation} setPopUpLocation={setPopUpLocation}/>    
        </div>
        
        <div className="header_search">

            <div className='header_dropdown'>
                <button class="header_search_all" type="button" 
                        onClick={(e)=> setIsActive(!isActive)}>
                    <span>{selected}</span>
                    <ArrowDropDownTwoToneIcon/>
                </button>
                {isActive && (<div className='header_dropdown_menu'>
                {Departments.map(option=>
                        <div className='header_dropdown_menu_item' 
                            onClick={(e)=>{setSelected(option);
                                            setIsActive(false)
                                        }
                                     }>{option}
                        </div>
                    )}
                </div>)}

            </div>

            <input className='header_searchInput' type="text"/>
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
            <Link to ={!user && '/login'}>
            <div className='header_option' onClick={handleAuthentication}>
                <span className='header_optionLineOne'>Hello, {user ? (user?.email).split('@')[0] : "Guest"}</span>
                <span className='header_optionLineTwo'>{!user? 'Sign in': 'Sign out'}</span>
            </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>                
            </div>

            <Link to="/checkout">
            <div className='header_optionBasker'>
                <AddShoppingCartOutlinedIcon/>
                 <span className='header_optionLineTwo header_basketCount'>{basket?.reduce((accum,item)=> accum + item.quantity, 0)}</span>
            </div>
            </Link>
        </div>  

    </div>
  )
}

export default Header