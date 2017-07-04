/**
 * Created by hilakerer1 on 21/06/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import {setSelectedDate} from '../actions/commonActions.js'
import '../styles/DateBox.css'

class DateBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: false};
    }
    onBoxClick(){
        var isSelected = !this.state.selected;
        this.setState({selected: isSelected});
        this.props.setDateStatus(this.props.currentDate.key, isSelected);
    }
    render(){
        const currentDate = this.props.currentDate ;
        const boxClassName = this.state.selected ? ' selected' : '';
        if (currentDate.hasOwnProperty('date')){
            return (<div className={'date-box available' + boxClassName } onClick={this.onBoxClick.bind(this)}> {currentDate.date}/{currentDate.month}</div>)
        }
        return <div className='empty-date-box'></div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDateStatus : (key, isSelected) => {
            dispatch(setSelectedDate(key, isSelected));
        }
    }
}


export default connect(null, mapDispatchToProps)(DateBox);