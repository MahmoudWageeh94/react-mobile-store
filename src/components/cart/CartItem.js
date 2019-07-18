import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
export default function CartItem({item,value}) {
    const {id, img, title, count, price, total} =item;
    const {increment, decrement, removeProduct} = value;
    return (
        <div className="row mb-2">
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <img src={img} alt="product" style={{width: "5rem",height:"5rem"}}/>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <p>{title}</p>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span className="d-lg-none">price:</span><span>${price}</span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span className="btn btn-black mx-1" onClick={() => {decrement(id)}}>-</span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-1" onClick={() => {increment(id)}}>+</span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
                <span id="trash" onClick={() => {removeProduct(id)}}><FontAwesomeIcon icon={faTrashAlt}/></span>
            </div>
            <div className="text-center col-lg-2 col-md-2 text-capitalize">
            <span className="d-lg-none">total:</span><span>${total}</span>
            </div>
        </div>
    )
}
