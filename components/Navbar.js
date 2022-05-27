import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import { MainContext } from '../context/StateContext'

const Navbar = () => {
  const {showCart,setShowCart,totalQty} = MainContext()
  return (
    <div className='navbar-container'>
      <p className='logo'><Link href='/'>JSM Headphones</Link></p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(!showCart)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQty}</span>
      </button>
      {showCart ? <Cart /> : ''}
    </div>
  )
}

export default Navbar