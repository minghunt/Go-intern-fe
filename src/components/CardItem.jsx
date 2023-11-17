import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import './Cart.css'
function CardItem(props) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    let active = true
    if (cart.filter(item => item.id === props.item.id).length)
        active = false

    const [isActive, setIsActive] = useState(active);

    const toggleActive = () => {
        if (isActive) {
            dispatch(addToCart(
                props.item))
            setIsActive(!isActive);
        }
    };
    useEffect(() => {
        let active = true
        if (cart.filter(item => item.id === props.item.id).length)
            active = false
        setIsActive(active)

    }, [cart,props.item.id])
    return (
        <div className='card-content__item '>
            <div className='card-content__item-img' style={{ backgroundColor: props.item?.color }}>
                <img src={props.item?.image} alt="" />
            </div>
            <h3>{props.item?.name}</h3>
            <p>{props.item?.description}</p>
            <div className='card-content__item_bottom'>
                <h3>${props.item?.price}</h3>
                <button onClick={() =>
                    toggleActive()
                } className={`btn-addtocart ${isActive ? 'available' : 'ticked'}`}>{isActive ? <h3>ADD TO CART</h3> : ''}</button>
            </div>
        </div>
    )
}
export default CardItem