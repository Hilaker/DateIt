import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
//import {syncHistoryWithStore} from 'react-router-redux';
import {URLs} from './common/constants.js';
import HomeScreen from './components/HomeScreen.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import DateIt from './components/DateIt.js';
import ThankYou from './components/ThankYou.js';
import reducers from "./reducers";
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware, routerMiddleware(Router))));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container-page">

                <Route exact path={URLs.HOME} component={HomeScreen} />
                <Route path={URLs.ABOUT} component={About} />
                <Route path="/dateit" component={DateIt} />
                <Route path="/thankyou" component={ThankYou} />

            </div>
        </Router>
    </Provider>,    document.getElementById('root'));
registerServiceWorker();

// <Header/>
// <Footer />
