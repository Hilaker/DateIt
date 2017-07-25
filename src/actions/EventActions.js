/**
 * Created by hilakerer1 on 18/07/2017.
 */
//import {SET_EMAIL_TO_STORE, SET_DATES_TO_STORE, SET_SELECTED_DATE} from './actionTypes';
import { push } from 'connected-react-router'
import {ajax} from '../common/utils.js'
import {serverUrl} from '../common/constants.js';

export function createNewEventAction(event){
    return function(dispatch, getState){
        //TODO inputs validations
        ajax(serverUrl+"/eventServer", event).then(json => {
            //forward to choose dates page
            var eventId = json.id;
            dispatch(push("event="+eventId));
        });
    }
}