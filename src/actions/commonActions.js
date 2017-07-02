/**
 * Created by hilakerer1 on 19/06/2017.
 */
import {SET_EMAIL_TO_STORE} from './actionTypes';
import {ajax} from '../common/utils.js'

export function setEmailToStore(email){
    return {
        type: SET_EMAIL_TO_STORE,
        email
    }
}

export function signInAction(email){
   return function(dispatch){
       dispatch(setEmailToStore(email));
   }
}

export function saveDatesAction(dates) {
    return function(dispatch) {
        //todo fetch server call
        var now = new Date();
        var response = ajax('http://127.0.0.1:8080/dateitServer', {eventId: 'event1', userId: 'user1', date: now});
        debugger;
    }
}