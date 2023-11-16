import React from "react";
import { useState } from "react";
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
    const [isActive, setIsActive] = useState(true);

    const toggleActive = () => {
        setIsActive(!isActive);
    };
    return (
        <div className='card'>
            <span className='circle'></span>
            <span className='logo'></span>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }} className='card-header'>
                <h2 style={{ marginBottom: '0' }}>Your cart</h2>
                <h2 style={{ marginBottom: '0' }}>${getTotalPrice()}</h2>

            </div>
            <div className='card-content'>
               {
                cart.map(item=>
            <CartItem item={item}/>
            )
               }
            </div>

        </div>
    )
}
export default Cart