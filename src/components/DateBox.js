/**
 * Created by hilakerer1 on 21/06/2017.
 */
import React from 'react'
import '../styles/DateBox.css'

class DateBox extends React.Component {
    render(){
        const currentDate = this.props.currentDate ;
        return (<div className='date-box available'> {currentDate.date}/{currentDate.month}</div>)
    }
}

export default DateBox;