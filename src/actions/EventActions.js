/**
 * Created by hilakerer1 on 18/07/2017.
 */
//import {SET_EMAIL_TO_STORE, SET_DATES_TO_STORE, SET_SELECTED_DATE} from './actionTypes';
import { push } from 'connected-react-router'
import {ajax} from '../common/utils.js'
import {requestCallStart, requestCallEnd} from './commonActions.js'
import {serverUrl} from '../common/constants.js';

export function createNewEventAction(event){
    return function(dispatch, getState){

        dispatch(requestCallStart());

        ajax(serverUrl+"/eventServer", event).then(json => {
            dispatch(requestCallEnd());
            //forward to choose dates page
            var eventID = json.eventID;
            var userID = json.userID;
            dispatch(push(eventID+"/"+userID));
        });
    }
}