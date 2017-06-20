/**
 * Created by hilakerer1 on 19/06/2017.
 */
import {SET_EMAIL_TO_STORE} from '../actions/actionTypes.js'

export default function commonReducer(state, action) {
    state = (state || {});
    switch(action.type){
        case SET_EMAIL_TO_STORE :
            return Object.assign({}, state, {email: action.email});
        default :
            return state;
    }
}