/**
 * Created by hilakerer1 on 19/06/2017.
 */
import {SET_EMAIL_TO_STORE, SET_DATES_TO_STORE, SET_SELECTED_DATE, REQUEST_CALL_START, REQUEST_CALL_END, SET_URL_PARAMS_TO_STORE} from './actionTypes';
import { push } from 'connected-react-router'
import {ajax} from '../common/utils.js'

export function setEmailToStore(email){
    return {
        type: SET_EMAIL_TO_STORE,
        email
    }
}
export function setCurrentDatesToStore(){
    return {
        type: SET_DATES_TO_STORE
    }
}

export function requestCallStart(){
    return {
        type : REQUEST_CALL_START
    }
}

export function requestCallEnd(){
    return {
        type : REQUEST_CALL_END
    }
}

export function signInAction(email){
   return function(dispatch){
       dispatch(setEmailToStore(email));
       //dispatch(setCurrentDatesToStore()); //in the future we will load here the previouse dates the user marked
   }
}

export function saveDatesAction(eventID, userID) {
    return function(dispatch, getState) {
        dispatch(requestCallStart());
        var state = getState();
        var dates = state.data.dates;
        var selectedDates = [];
        for(var key in dates){
            var date = dates[key];
            if(date.isSelected){
                selectedDates.push(date.month + "/" + date.date + "/" + date.year);
            }
        }
        //todo fetch server call + change to server url constant
        var response = ajax('http://127.0.0.1:8080/dateitServer', {eventId: eventID, userId: userID, dates: selectedDates.join()}).then(json => {
            console.log("got json response :" + json);
            dispatch(requestCallEnd());
            dispatch(push("/thankyou"));
        });
       console.log("response: "+ response);
    }
}

export function setSelectedDate(key, isSelected) {
    return {
        type: SET_SELECTED_DATE,
        key,
        isSelected
    }
}
