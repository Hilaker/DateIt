/**
 * Created by hilakerer1 on 19/06/2017.
 */
import {SET_EMAIL_TO_STORE} from './actionTypes';

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