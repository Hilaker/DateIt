/**
 * Created by hilakerer1 on 21/06/2017.
 */
import React from 'react'
import DateBox from './DateBox.js'

class DatesContainer extends React.Component {
    addEmptyDates(allDates, day){
        var i = 1;
        while( i <= day){
            allDates.push({});
            i++;
        }
    }
    /*
        Get all 30 days beginning today
     */
    getDates(){
        var date = new Date(); //today
        var currentDate = date.getDate();
        var allDates = [];
        //allDates.push({date: date.getDate, month: date.getMonth(), day: date.getDay()}); don't include today
        date.setDate(date.getDate() + 1);
        this.addEmptyDates(allDates, date.getDay());
        while(date.getDate() !== currentDate){
            allDates.push({date: date.getDate(), month: date.getMonth() + 1, day: date.getDay()});
            date.setDate(date.getDate() + 1);
        }
        return allDates;
    }
    getDatePerRow(subList, startIndex){
        return (
            <tr key={startIndex}>
                {subList.map((currentDate, index) => {
                    return <td key={index}><DateBox currentDate={currentDate}/></td>
                })}
            </tr>
        )
    }
    getDatesTableRows(){
        const datesList = this.getDates();
        return datesList.map(function(date, index) {
            if(index % 7 === 0){
                return this.getDatePerRow(datesList.slice(index, index + 7), index);
            }
            return null;
        }.bind(this));
    }
    render(){
        return (
            <table>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tbody>
                    {this.getDatesTableRows()}
                </tbody>
            </table>)
    }
};

export default DatesContainer;