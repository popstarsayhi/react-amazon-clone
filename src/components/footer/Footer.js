import React from 'react'
import "../../css/Footermain.css"
import wechat from "../../wechat.png"

function Footer() {
  return (
    <div className='footer_body'>
        <div className='footer_header'>
            <button type='text'
            onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }}> Back to top </button> </div>

        <div className='footer_main'>
            <ul>Contact Me
                <li>vanessa.zhouwx@gmail.com</li>
                <li>wechat:</li>
                <li> 
                    <img src={wechat} style={{width:'100px',height:'100px'}}/>
                </li>
            </ul>
            <ul>Get to Know Us
                <li>Careers</li>
                <li>Amazon and Our Planet</li>
                <li>Investor Relations</li>
                <li>Press Release</li>
                <li>Amazon Science</li>
            </ul>
            <ul>Make Money with Us
                <li>Sell on Amazon</li>
                <li>Amazon Associates</li>
                <li>Sell on Amazon Handmade</li>
                <li>Advertise Your Products</li>
                <li>Independently Publish with Us</li>
                <li>Host an Amazon Hub</li>
            </ul>
            <ul>Amazon Payment Products
                <li>Amazon.ca Rewards Mastercard</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
                <li>Gift Cards</li>
                <li>Amazon Cash</li>
            </ul>
            <ul>Let Us Help You
                <li>COVID-19 and Amazon</li>
                <li>Shipping Rates & Policies</li>
                <li>Amazon Prime</li>
                <li>Returns Are Easy</li>
                <li>Manage your Content and Devices</li>
                <li>Customer Service</li>
            </ul>
        </div>    
    </div>
  )
}

export default Footer