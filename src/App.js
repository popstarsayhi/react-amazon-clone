import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/checkout/StateProvider';
import Footer from './components/footer/Footer';
import Payment from './components/checkout/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/checkout/Orders'

const promise = loadStripe('pk_test_51LrWBVFvPtz9GovJ7wHPmFsPzPmPaJ68iUGgyiNkavs9SHTGl8JZ7rbJ2x34Pn3iK9FsBbVESwxkyNZmY64BpDOR00OYqMHT8F')


function App() {

  const[{}, dispatch] = useStateValue()

  useEffect(()=>{
    //only run once when the app component is rendering
    auth.onAuthStateChanged(authUser =>{
     // console.log('the user is ' ,authUser)

      if(authUser){
        //the user just logged in / or was logged in 
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out 
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Home/>
            <Footer/>
            </>
          }/>
          <Route path ="/login" element={
            <Login />
          }/>
          <Route path="/checkout" element={
            <>
            <Header/>
            <Checkout/>
            </>
          }/>
          <Route path ="/payment" element={
            <>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
           </>
          }/>
          <Route path="/orders" element={
            <>
            <Orders/>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
