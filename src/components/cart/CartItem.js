import React from 'react'

export default function CartItem({item,value}) {
    const {id, img, title, count, price, total} =item;
    const {increment, decrement, removeProduct} = value;
    return (
        <div className="row">
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <img src={img} alt="product" style={{width: "5rem",height:"5rem"}}/>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <p>{title}</p>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span>${price}</span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span className="btn btn-black mx-auto" onClick={() => {decrement(id)}}>-</span>
                <span className="btn btn-black mx-auto">{count}</span>
                <span className="btn btn-black mx-auto" onClick={() => {increment(id)}}>+</span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span onClick={() => {removeProduct(id)}}>remove</span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span>${total}</span>
            </div>
        </div>
    )
}
