import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import {syncHistoryWithStore} from 'react-router-redux';
//import {URLs} from './common/constants.js';
import HomeScreen from './components/HomeScreen.js';
import About from './components/About.js';
import reducers from "./reducers";

import registerServiceWorker from './registerServiceWorker';
let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    </Provider>,    document.getElementById('root'));
registerServiceWorker();
