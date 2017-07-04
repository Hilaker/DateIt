/**
 * Created by hilakerer1 on 26/06/2017.
 */
import 'whatwg-fetch';

export function ajax(url, data){
    var requestObj = {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(data), ///parametrize?
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }
    return fetch(url, requestObj).then(checkAjaxStatus).then(response =>
        response.json());
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

/*
 Get all next 30 days
 */
export function getDates(){
    var date = new Date(); //today
    var currentDate = date.getDate();
    var allDates = {};
    date.setDate(date.getDate() + 1);
    //addEmptyDates(allDates, date.getDay());
    var key = 0;
    while(date.getDate() !== currentDate){
        allDates[key] = {date: date.getDate(), month: date.getMonth() + 1, day: date.getDay(), year: date.getFullYear(), key:key};
        date.setDate(date.getDate() + 1);
        key++;
    }
    return allDates;
}