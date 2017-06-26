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

export function saveDates(dates) {
    return function(dispatch) {
        //todo fetch server call
        var response = ajax('myUrl', "hello");
    }
}