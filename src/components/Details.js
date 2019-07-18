import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'


export default class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {id, company, title, img, price, info, inCart} = value.productDetaile;
                        return(
                            <div className="container">
                                <div className="row">
                                    <div className="mx-auto mb-10 text-center">
                                        <h1 className="text-weight-bold">{title}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="img-container col-10 col-lg-6 col-sm-6">
                                        <img src={img} alt="product"/>
                                    </div>
                                    <div className="col-lg-6 col-10 col-sm-6">
                                        <h2>{title}</h2>
                                        <p className="text-mute text-uppercase">
                                            powerd by: <span className="text-mute">{company}</span>
                                        </p>
                                        <p>price: ${price}</p>
                                        <h4 className="text-weight-bold  text-mute text-uppercase">some info:</h4>
                                        <p>{info}</p>
                                        <Link to="/">
                                            <button className="text-capitalize btn-primary mx-3 p-2">back to product</button>
                                        </Link>
                                        <button 
                                        className="text-capitalize btn-success p-2" 
                                        disabled={inCart?true:false}
                                        onClick={() =>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}
                                        >
                                            {
                                                inCart?'Added to cart':'Add to cart'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
