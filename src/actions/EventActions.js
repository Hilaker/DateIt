/**
 * Created by hilakerer1 on 18/07/2017.
 */
import {SET_EMAIL_TO_STORE, SET_DATES_TO_STORE, SET_SELECTED_DATE} from './actionTypes';
import {ajax} from '../common/utils.js'
import {serverUrl} from '../common/constants.js';

export function createNewEventAction(event){
    return function(dispatch, getState){
        //TODO inputs validations
        var response = ajax(serverUrl+"/eventServer", event).then(json => {
            console.log("got json response :" + json);
        });
    }
}