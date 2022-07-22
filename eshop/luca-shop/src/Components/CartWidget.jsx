import React, {useEffect} from 'react'
import { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import Navbar from './Navbar'
import {Icon} from 'react-icons-kit'
import {ic_add} from 'react-icons-kit/md/ic_add'
import {ic_remove} from 'react-icons-kit/md/ic_remove'
import {iosTrashOutline} from 'react-icons-kit/ionicons/iosTrashOutline'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../Config/Config'


const CartWidget = ({user}) => {

    const {shoppingCart, dispatch, totalPrice, totalQty} = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged(user=> {
            if(!user){
                navigate('/login')
            }
        })
    })
    

  return (
    <>
            <Navbar user={user} />
            <>
                {shoppingCart.length !== 0 && <h1>Mi carrito</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>No hay productos en tu carrito o existe un error de conexcion (actualizar la pagina) o no estas loggeado</div>
                            <div><Link to="/">Regresar al Inicio</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>$ {cart.ProductPrice}.00</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                $ {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Desglose de compras
                        </div>
                        <div className='cart-summary-price'>
                            <span>Precio Total</span>
                            <span>${totalPrice}.00</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Piezas Totales</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='/checkout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Pagar envio
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
  )
}

export default CartWidget
