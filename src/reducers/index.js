/**
 * Created by hilakerer1 on 14/06/2017.
 */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import simpleReducer from './simpleReducer.js';

const reducers = combineReducers ({
    routing: routerReducer,
    data: simpleReducer
});

export default reducers;