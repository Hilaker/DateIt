/**
 * Created by hilakerer1 on 26/06/2017.
 */
import 'whatwg-fetch';

export function ajax(url, data){
    var requestObj = {
        method: 'POST',
        body: data, ///parametrize?
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }
    return fetch(url, requestObj).then(checkAjaxStatus).then(response => response.json());
}

export function checkAjaxStatus(response){
    if(response.ok){
        return response;
    }else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}