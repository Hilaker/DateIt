import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {URLs} from './common/constants.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import DateIt from './components/DateIt.js';
import ThankYou from './components/ThankYou.js';
import NewEvent from './components/NewEvent.js';
import Login from './components/Login.js'
import reducers from "./reducers";
import './styles/App.css';
//import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history';
import {connectRouter, ConnectedRouter, routerMiddleware} from 'connected-react-router';

const history = createBrowserHistory();
let store = createStore(connectRouter(history)(reducers), {}, compose(applyMiddleware(thunkMiddleware, routerMiddleware(history))));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="container-page">
                <Header/>
                <Switch>
                    <Route path={URLs.ABOUT} component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/thankyou" component={ThankYou} />
                    <Route path="/newEvent" component={NewEvent} />
                    <Route path="/:event/:user" component={Home} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>,    document.getElementById('root'));



