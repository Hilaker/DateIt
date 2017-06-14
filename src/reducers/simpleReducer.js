/**
 * Created by hilakerer1 on 14/06/2017.
 */
import {FETCH_DATA_FROM_SERVER} from '../actions/actionTypes.js'

export default function simpleReducer(state, action){
    state = {};
    switch (action.type){
        case FETCH_DATA_FROM_SERVER :
            return Object.assign({}, state);
        default :
            return state;
    }
}