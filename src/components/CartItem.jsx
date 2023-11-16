import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
function CartItem(props) {
    const cart = useSelector((state) => state.cart)

    let active=true
    if (cart.filter(item => item.id === props.item.id).length)
       active=false

    const [isActive, setIsActive] = useState(active);
    const dispatch = useDispatch();

    return (
        <div className='card-content__item-cart'
                    style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: '-15px', position: 'relative' }}>
                        <span style={{
                            width: '80px', position: 'absolute', top: '35px', left: '15px',
                            backgroundColor: props.item.color, height: '80px', borderRadius: '50%',
                            boxShadow:'0 0 1px gray'
                        }}></span>
                        <img style={{ width: '105px', zIndex: '5', transform: 'rotate(-28deg)' }} src={props.item.image} alt="" />

                    </div>
                    <div style={{ width: '170px' }}>
                        <h4 style={{ marginTop: '28px',marginBottom:'10px' }}>{props.item.name}</h4>
                        <h3 style={{ margin: '0' }}>${props.item.price}</h3>
                        <div style={{ display: 'flex',justifyContent:'space-between',marginTop:'10px' }}>
                        <div style={{display:'flex',alignContent:'center'}}>
                            <button id="cart-decrease" onClick={() => dispatch(decrementQuantity(props.item.id))}></button>
                            <span style={{margin:'-4px 10px 0',alignSelf:'center'}}>{props.item.quantity}</span>
                            <button onClick={() => dispatch(incrementQuantity(props.item.id))} id="cart-increase"></button>
                        </div>
                        <div>
                        <button onClick={() => dispatch(removeItem(props.item.id))} id="cart-delete"></button>

                        </div>
                    </div>
                    </div>
                    
                </div>
    )
}
export default CartItem