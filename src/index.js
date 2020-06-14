import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import rootReducer from "./store/store";

ReactDOM.render( <Provider store = {rootReducer}><BrowserRouter> <App /> </BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
