import React from "react";
import { useState,useEffect } from "react";
import './Cart.css';
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
function Cart() {
const cart = useSelector((state) => state.cart)
    const getTotalPrice = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity*item.price
        })
        return total.toFixed(2)
      }

    
    useEffect(()=>{
    },[cart])
    return (
        <div className='card' >
        <span className='circle'></span>
        <span className='logo'></span>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }} className='card-header'>
            <h2 style={{ marginBottom: '0' }}>Your cart</h2>
            <h2 style={{ marginBottom: '0' }}>${getTotalPrice()}</h2>

        </div>
        {cart.length===0?<p style={{zIndex:'5',position:'relative'}}>Your cart is empty.</p>:
        <div className='card-content'>
           {
            cart.map((item,i)=>
        <CartItem key={i} item={item}/>
        )
           }
        </div>}

    </div>
    )
}
export default Cart