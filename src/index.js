import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/context'

ReactDOM.render(
                <ProductProvider>
                    <Router>
                        <App />
                    </Router>
                </ProductProvider>,
                 document.getElementById('root'));

serviceWorker.unregister();
