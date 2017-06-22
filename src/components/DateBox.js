/**
 * Created by hilakerer1 on 21/06/2017.
 */
import React from 'react'
import '../styles/DateBox.css'

class DateBox extends React.Component {
    onBoxClick(){
        //todo set state to selected
    }
    render(){
        //todo add class selected
        const currentDate = this.props.currentDate ;
        if (currentDate.hasOwnProperty('date')){
            return (<div className='date-box available' onClick={this.onBoxClick}> {currentDate.date}/{currentDate.month}</div>)
        }
        return <div className='empty-date-box'></div>
    }
}

export default DateBox;