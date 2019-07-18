import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'

export default function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-12 mx-uto text-right mt-2">
                    <Link to="/">
                        <button className="btn btn-outline-danger px-3 text-uppercase"
                         onClick={() => {clearCart()}}>clear cart</button>
                    </Link>
                    <h5 className="text-Capitalize mt-3">
                        <span >cart sub total: </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5 className="text-Capitalize mt-3">
                        <span >cart tax: </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5 className="text-Capitalize mt-3">
                        <span >cart total: </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    <PaypalButton />
                </div>
            </div> 
        </div>
    )
}
