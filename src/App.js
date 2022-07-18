import React, { useEffect } from 'react';
import './App.css';
import Header from './js/Header';
import Home from './js/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './js/Checkout'
import Login from './js/Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './js/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './js/Orders'


const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);





  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/orders' element={<><Header/><Orders/></>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/checkout' element={<><Header/><Checkout/></>}/>
    <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
    <Route path='/' element={<><Header/><Home/></>}/>
    </Routes>  
    </div>
    </Router>
  );
}

export default App;
