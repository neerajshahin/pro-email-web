import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/scss/bootstrap.scss";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/admin" render={props => <Layout {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
