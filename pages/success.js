import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { MainContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'

const success = () => {
  const { setTotalPrice, setTotalQty, setCartItems } = MainContext()
  useEffect(()=>{
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQty(0)
    runFireworks()
  },[])
  return (
    <div className='success-wrapper'>
        <div className="success">
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className="email-msg">Check your email inbox for the receipt.</p>
            <p className="description">
                If you have any questions, please email
                <a href="mailto:order@gmail.com" className="email">order@gmail.com</a>
            </p>
            <Link href='/'>
                <button className='btn' type='button' width='300px'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default success