import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './context'
import style from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default class Product extends Component {
 
    render() {
        const {id, img, title, price, inCart} = this.props.products
        return (
            <div className="col-lg-3 col-sm-6 mx-auto mb-5">
                <ProductConsumer>
                    {(value) => {
                      return ( 
                      <CardContainer>
                          <div className="card">
                                <div className="img-container p-5" 
                                    onClick={() => value.handleDetails(id)}>
                                    <Link to="/details">
                                    <img  src={img} className="card-img-top" alt="Product"/>
                                    </Link>
                                    <button 
                                        className="card-btn"
                                        disabled={inCart?true:false}
                                        title="add to cart" 
                                        onClick={() => {
                                            value.addToCart(id)
                                            value.openModal(id)
                                            }}>
                                    {
                                        inCart?( <p className="text-capitalize mb-0">in cart</p>)
                                            :(<FontAwesomeIcon icon={faShoppingCart}/>)
                                    }
                                    </button>
                                </div>
                                <div className="card-footer justify-content-between d-flex">
                                    <p className="align-self-center">{title}</p>
                                    <h5 className="text-blue font-itlic mb-0"><span className="mr-1">{price}$</span></h5>
                                </div>
                            </div>
                    </CardContainer>
                      )}}
                </ProductConsumer>
            </div>
        )
    }
}
const CardContainer = style.div`
       transition: all 0.5s ease-in-out;
      .img-container{
          position: relative;
          overflow: hidden;
      }
      .card-btn{
        background:var(--primary);
        position: absolute;
        bottom: 0;
        right: -100%;
        border: none;
        padding: 5px 8px;
        color: var(--white);
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
      }
      .card-img-top{
        transition: all 1s ease-in-out;
      }
      .img-container:hover .card-img-top{
        transform: scale(1.5)
      }
      &:hover{
        cursor: pointer;
        .card-btn{
            right: 0;
          }
        .card{
            box-shadow: rgba(0,0,0,0.3) 1px 1px 2px 0.5px;
        }
      }
`