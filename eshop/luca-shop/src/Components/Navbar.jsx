import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../images/logo.svg';
import {Icon} from 'react-icons-kit';
import {cart} from 'react-icons-kit/entypo/cart';
import { auth } from '../Config/Config';
import { useContext } from 'react';
import { CartContext } from '../Global/CartContext';

const Navbar = ({user}) => {

  const {totalQty} = useContext(CartContext);

  const navigate = useNavigate();

  const logout = ()=>{
    auth.signOut().then(()=>{
      navigate('/login')
    })
  }
  return (
    <div className='navbox'>
      <div className='leftside'>
          <img src={logo} alt="Logo" />
      </div>
      {!user && <div className='rightside'>
        <Link to='signup' className='navlinks'>Sign Up</Link>
        <Link to='login' className='navlinks'>Log In</Link>
      </div>} 
        {user && <div className='rightside'>
            <span><Link to = '/' className='navlinks'>{user}</Link></span>
            <span><Link to = 'cartproducts' className='navlinks'><Icon icon={cart}/></Link></span>
            <div className='relative'>
              <span className='no-of-products'>{totalQty}</span>
            </div>
            <span><button className='logout-btn' onClick={logout}>Salir</button></span>
          </div>}
    </div>
  )
}

export default Navbar;