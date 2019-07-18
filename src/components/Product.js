import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './context'


export default class Product extends Component {
 
    render() {
        const {id, img, title, price, inCart} = this.props.products
        return (
            <div className="col-lg-3 col-sm-6 mx-auto mb-5">
                <ProductConsumer>
                    {(value) => {
                      return ( <div className="card">
                        <div className="img-container p-5" 
                        onClick={() => value.handleDetails(id)}>
                            <Link to="/details">
                            <img  src={img} className="card-img-top" alt="Product"/>
                            </Link>
                            <button 
                                className="card-btn"
                                disabled={inCart?true:false} 
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                    }}>
                            {
                                inCart?( <p className="text-capitalize mb-0">in cart</p>)
                                    :(<i className="fas fa-cart-plus"></i>)
                            }
                            </button>
                        </div>
                        <div className="card-footer justify-content-between d-flex">
                            <p className="align-self-center">{title}</p>
                            <h5 className="text-blue font-itlic mb-0"><span className="mr-1">{price}$</span></h5>
                        </div>
                    </div>
                      )}}
                </ProductConsumer>
            </div>
        )
    }
}
