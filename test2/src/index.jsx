import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import {Router,Route,browserHistory} from 'react-router';
// import { AppContainer } from 'react-hot-loader';

ReactDom.render(
    <div>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="*" component={Home} />
    </Router></div>
    , document.getElementById('app'));
