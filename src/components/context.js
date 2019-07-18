import React, { Component } from 'react'
import {storeProducts, detailProduct} from '../data'


const ProductContext = React.createContext();
 class ProductProvider extends Component {
    state = {
        products: [],
        productDetaile: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0

    }
    componentDidMount(){
        this.setProduct();
    }
    setProduct = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
             return {productDetaile: product}
        })
        
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return{products: tempProducts,cart: [...this.state.cart,product]}
        },()=> {this.addTotal()}
        )
        
    }
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product,modalOpen: true}
        })

    }
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }
    increment = (id) => {
        const tempCart = [...this.state.cart];
        const product = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(product);
        product.count += 1;
        product.total = product.price * product.count
        tempCart[index] = product;
        this.setState(() => {return {cart: tempCart}},() => {
            this.addTotal();
        });
    }
    decrement = (id) => {
        const tempCart = [...this.state.cart];
        const tempProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(tempProduct);
        const product = tempCart[index];
        product.count -= 1;
        if (product.count === 0){
            this.removeProduct(id);
        }else{
            product.total = product.price * product.count;
            this.setState(() => {return {cart: tempCart}},() => {
                this.addTotal();
            });
        }   
    }
    removeProduct = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.products];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;
        this.setState(() => {return {cart:[...tempCart],products: [...tempProducts]}},
        () => {
            this.addTotal();
        });
    }
    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
            this.setProduct();
            this.addTotal();
        }
        )
        
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => {return subTotal = subTotal + item.total});
        const tempTax = subTotal * 0.3;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = tax + subTotal;
        this.setState(() => {
            return {cartSubTotal: subTotal, cartTax: tax, cartTotal: total}
        })
    }
    render() {
        return (
            <ProductContext.Provider value={
                {
                  ...this.state,
                  handleDetails: this.handleDetails,
                  addToCart: this.addToCart,
                  openModal: this.openModal,
                  closeModal: this.closeModal,
                  increment: this.increment,
                  decrement: this.decrement,
                  removeProduct: this.removeProduct,
                  clearCart: this.clearCart
                }
                }>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider, ProductConsumer}
