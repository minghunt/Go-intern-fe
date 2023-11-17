import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import './Card.css'
import CardItem from "./CardItem";
function ProductList() {
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        axios.get('https://go-intern-be.onrender.com/api/v1/products')
            .then((data) => {
                setProductList(data.data);

            })
    }
        , [])
    return (
        <div className='card'>
            <span className='circle'></span>
            <span className='logo'></span>
            <div className='card-header'>
                <h2>Our Products</h2>
            </div>
            <div className='card-content'>
                {
                    productList.map((item, i) => (

                        <CardItem key={i} item={item} />
                    ))}
            </div>
        </div>
    )
}
export default ProductList