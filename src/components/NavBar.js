import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'


export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark  bg-dark px-sm-5">
                <Link to="/">
                    <img className="navbar-brand" src={logo} alt="Brand" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Product</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <button>
                            <i className="fas fa-cart-plus"></i>
                            My Cart
                        </button>
                    </Link>
                </div>
            </nav>
        )
    }
}
