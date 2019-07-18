import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import CartList from './CartList'
import Title from '../Title'
import EmptyCard from './EmptyCart'
import CartColumns from './CartColumns'
import CartTotal from './CartTotal'


export default class Cart extends Component {

    render() {
        return (
            <div className="container py-5">
                <ProductConsumer>
                    {
                        (value) => {
                            if (value.cart.length <= 0){
                                return (<EmptyCard />)
                            }else{
                                return(
                                    <React.Fragment>
                                      <Title name="your" title="cart"/>
                                      <CartColumns />
                                      <CartList value={value}/>
                                      <CartTotal value={value}/>
                                    </React.Fragment>
                                    )
                                
                            }
                          
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
