import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import ButtonContainer from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
                <Link to="/">
                    <img className="navbar-brand" src={logo} alt="Brand" />
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer cart>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                            My Cart
                        </ButtonContainer>
                    </Link>
            </nav>
        )
    }
}
