/**
 * Created by hilakerer1 on 19/06/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import {signInAction, saveDatesAction, requestCallStart} from '../actions/commonActions.js'
import DatesContainer from './DatesContainer.js'
import LoadingAnimation from './LoadingAnimation.js'
import '../styles/Event.css'


class Event extends React.Component {
    //onSubmitClick(){
    //    var email = this.state.email;
    //    this.props.signIn(email);
    //    //this.props.history.push("/dateit/welcome");
    //}
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    onSendClick(){
        this.props.saveDates(this.props.eventId, this.props.user);
       // this.props.history.push("/thankyou");
    }
    render() {
        return (
            <div>
                <div className='dates-selection-box'>
                    <span>
                        <div className='form-title'>Tell us when you are busy and we will update you once a date is chosen </div>
                        <DatesContainer dates={this.props.dates} />
                        <div className='send-button' onClick={this.onSendClick.bind(this)}>Send </div>
                    </span>
                </div>
                <LoadingAnimation />
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        email: state.data.email,
        dates: state.data.dates,
        showLoading : state.data.showLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email) => {
            dispatch(signInAction(email));

        },
        saveDates: (eventID, userID) => {
            dispatch(saveDatesAction(eventID, userID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);