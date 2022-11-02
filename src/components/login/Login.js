import React from 'react'
import "../../css/Login.css"
import {Link, useNavigate} from 'react-router-dom'
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import {useState} from 'react'
import {auth} from '../../firebase'

function Login() {

    //In react-router-dom v6 useHistory() is replaced by useNavigate().
    //use navigate("/") instead of navigate.push("/")

    const navigate = useNavigate() 

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
              })
            .catch(error=>alert(error.message))
    }

    const regiser = e =>{
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                //check if it successfully create new user with password
                console.log(auth)
                //if success, push to the main page 
                if(auth) {
                    navigate('/') 
                }
            }).catch(error => alert(error.message))
    }


  return (
    <div className='lgoin'>
        <Link to= '/'>
        <img 
            className='login_logo'
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
        </Link> 

       <div className='login_main'>
       <div className='login_container'>
           <h1>Sign in</h1>
           <form>
               <h5>E-mail address</h5>
               <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
               <h5>Password</h5>
               <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
               <button className='login_siginButton' 
                       onClick={signIn} 
                       type="submit">
                        Sigin in
               </button>
               <p>By continuing, you agree to Amazon's 
                  <span>FAKE CLONE Condition</span>
                  of Use and 
                  <span>Privacy Notice</span>
               </p>
               <div className='login_help'>
                    <ArrowRightTwoToneIcon />
                    <span style={{color:'#0066c0'}}>Need help?</span>
               </div>
           </form>
       </div>

       <div className='login_bottom'>
               <p>New to Amazon?</p>
               <button className='login_registerButton'
                       onClick={regiser}
                       type="submit">
                       Create Your Amazon Account
               </button>
       </div>

       </div> 

       <div className='login_end'>
           <span>Conditions of Use</span>
           <span>Privcay Noice</span>
           <span>Help</span>
       </div>
    </div>
  )
}

export default Login