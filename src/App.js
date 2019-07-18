import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/modal';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route  component={Default}/>
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
