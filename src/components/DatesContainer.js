/**
 * Created by hilakerer1 on 21/06/2017.
 */
import React from 'react'
import DateBox from './DateBox.js'


class DatesContainer extends React.Component {
    addEmptyDates(allDates, day){
        var i = 1;
        while( i <= day){
            allDates.unshift({});
            i++;
        }
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
        //to array and add empty dates
        const datesList =  Object.values(this.props.dates);
        this.addEmptyDates(datesList, datesList[0].day);
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