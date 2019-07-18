import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'
import ButtonContainer from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {id, company, title, img, price, info, inCart} = value.productDetaile;
                        return(
                            <div className="container">
                                <div className="row py-5">
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
                                            powerd by: <span>{company}</span>
                                        </p>
                                        <p className="text-muted">price: ${price}</p>
                                        <h4 className="text-weight-bold  text-uppercase">some info:</h4>
                                        <p  className="text-muted">{info}</p>
                                        <Link to="/">
                                            <ButtonContainer className="text-capitalize mx-3 p-2">back to product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        className="text-capitalize  p-2"
                                        cart 
                                        disabled={inCart?true:false}
                                        title="add to cart"
                                        onClick={() =>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}
                                        >
                                            {
                                                inCart?'Added to cart':(<FontAwesomeIcon icon={faShoppingCart}/>)
                                            }
                                        </ButtonContainer>
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
