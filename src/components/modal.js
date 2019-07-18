import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'
import style from 'styled-components'
import ButtonContainer from './button'


export default class modal extends Component {
   
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {modalOpen, closeModal} = value;
                        const {img, title, price} = value.modalProduct;
                        if(!modalOpen){
                            return null;
                        }else{
                            return (
                                <ModalWrapper>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-md-6 col-lg-4 col-8 mx-auto text-center p-5 text-capitalize">
                                                <h2>Added to cart</h2>
                                                <img src={img} className="img-fluid" alt="product"/>
                                                <h4>{title}</h4>
                                                <h5>price: ${price}</h5>
                                                <Link to="/">
                                                    <ButtonContainer onClick={() => closeModal()}>Continue shop</ButtonContainer>
                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonContainer cart onClick={() => closeModal()}>go to cart</ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalWrapper>
                            )
                        }
                        }
                    }   
                </ProductConsumer>          
            )
    }
}

const ModalWrapper = style.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
      background: #fff;
  }
`