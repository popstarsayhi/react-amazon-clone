import React from 'react'
import '../../css/NavBar.css'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

const monthNames = ["January", "February", "March", "April", "May", "June","July", 
                    "August", "September", "October", "November", "December"];

function NavBar() {

    const currentDate = new Date()
    const month = monthNames[currentDate.getMonth()]
    const day = `${currentDate.getDate()}`
    const sevenDay = `${currentDate.getDate()+7}`

  return (
    <div className='nav-main'>
        <div className='nav-left'>
            <MenuOutlinedIcon/>
            <div className='burger-desc'>All</div>
        </div>
            <ul className='nav-fill-sub'>
                <a href="#"><li>Best Sellers</li></a>
                <a href="#"><li>Customer Service</li></a>
                <a href="#"><li>Deals Store</li></a>
                <a href="#"><li>New Releases</li></a>
                <a href="#"><li>Sell</li></a>
                <a href="#"><li>Prime</li></a>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Electronics</li></a>
                <a href="#"><li>Coupons</li></a>
                <a href="#"><li>Books</li></a>
                <a href="#"><li>Fashion</li></a>
                <a href="#"><li>Toys & Games</li></a>
                <a href="#"><li>Sports & Outdoors</li></a>
            </ul>

        <div className='nav-right'>
            Shop deals {month} {day} - {sevenDay}
        </div>
    </div>
  )
}

export default NavBar