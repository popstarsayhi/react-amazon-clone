import React from 'react'
import "../../css/Footer.css"
import {Link} from "react-router-dom"

function FooterSignin() {
  return (
      <>
    <div className='footer_signin'>
        <p>See personalized recommendations</p>
        <Link to='/login'>
        <button className='footer_signin_siginButton'>Sigin in</button>
        </Link>
        <span>New customer? <span style={{color:'#0066c0'}}>Start here</span></span>
    </div>

    </>  )
}

export default FooterSignin