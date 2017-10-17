/**
 * Created by hilakerer1 on 19/06/2017.
 */
import {SET_EMAIL_TO_STORE, SET_DATES_TO_STORE, SET_SELECTED_DATE, REQUEST_CALL_START, REQUEST_CALL_END, SET_URL_PARAMS_TO_STORE} from '../actions/actionTypes.js';
import {getDates} from '../common/utils.js';

export default function commonReducer(state = {dates: getDates()}, action = '') {
    state = (state || {});
    switch(action.type){
        case REQUEST_CALL_START :
            return Object.assign({}, state, {showLoading : true});
        case REQUEST_CALL_END :
            return Object.assign({}, state, {showLoading : false});
        case SET_EMAIL_TO_STORE :
            return Object.assign({}, state, {email: action.email});
        case SET_DATES_TO_STORE:
            return Object.assign({}, state, {dates: getDates()});
        case SET_SELECTED_DATE:
            var newState = Object.assign({}, state);
            newState.dates[action.key].isSelected = action.isSelected;
            return newState;
        case SET_URL_PARAMS_TO_STORE:
            return Object.assign({}, state, {eventId: action.eventId, userId: action.userId});
        default :
            return state;
    }
}