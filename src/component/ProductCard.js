import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }

    return (
        <div className='card-wrapper' onClick={showDetail}>
            <img src={item?.img} className="unglow"/>
            <div>{item?.choice === true ? "Concious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>\{item?.price}</div>
            <div>{item?.new == true?"신제품":""}</div>
        </div>
    )
}

export default ProductCard