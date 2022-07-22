import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import AddProducts from './Components/AddProducts';
import { ProductsContextProvider } from './Global/ProductsContext';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { auth,db } from './Config/Config';
import { CartContextProvider } from './Global/CartContext';
import CartWidget from './Components/CartWidget';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from './Components/Checkout';
import NotFound from './Components/NotFound';

export class App extends Component {
  
  state={
    user: null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('SignedUpUserData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user: null
        })
      }
    })
  }

  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home user={this.state.user}/>}/>
              <Route path='/addproducts' element={<AddProducts/>} />
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cartproducts' element={<CartWidget user={this.state.user}/>}/>
              <Route path='/checkout' element={<Checkout user={this.state.user}/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <ToastContainer/>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App

