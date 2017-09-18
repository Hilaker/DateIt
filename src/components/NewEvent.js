/**
 * Created by hilakerer1 on 18/07/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {createNewEventAction} from '../actions/EventActions.js';
import LoadingAnimation from './LoadingAnimation.js';
import '../styles/NewEvent.css';

class NewEvent extends React.Component {
    onSaveClick(){
        var newEventName = this.state && this.state.eventName ?  this.state.eventName : "no name";
        var invitees = this.state && this.state.invitees ? this.state.invitees : "";
        //Todo form input validations and handle response error
        var inviteesArray = invitees.split(";");
        inviteesArray.push(this.state.userEmail);
        this.props.createNewEvent({userName: this.state.userName, userEmail: this.state.userEmail, eventName: newEventName, invitees: inviteesArray});
    }
    eventNameChange(event){
        this.setState({eventName: event.target.value});
    }
    userNameChange(event){
        this.setState({userName: event.target.value});
    }
    userEmailChange(event){
        this.setState({userEmail: event.target.value});
    }
    inviteesChange(event){
        this.setState({invitees: event.target.value});
    }
    render() {
        return (
        <div className='new-event'>
            <LoadingAnimation />
            <div className='form'>
                <div className='input-wrapper'>
                    <label>
                        Your name:
                    </label>
                    <input type="text" name="userName" onChange={this.userNameChange.bind(this)}/>
                </div>
                <div className='input-wrapper'>
                    <label>
                        Your email:
                    </label>
                    <input type="email" name="userEmail" onChange={this.userEmailChange.bind(this)}/>
                </div>
                <div className='input-wrapper'>
                    <label>
                        Event name:
                    </label>
                    <input type="text" name="eventName" onChange={this.eventNameChange.bind(this)}/>
                </div>
                <div className='input-wrapper'>
                    <label>
                        Your comments:
                    </label>
                    <input type="text" name="comments"/>
                </div>
                <div className='input-wrapper'>
                    <label>
                        Friends emails:
                    </label>
                    <input type="text" name="invitees" onChange={this.inviteesChange.bind(this)}/>
                </div>
                <div className='send-button-wrapper'><div className='send-button' onClick={this.onSaveClick.bind(this)}>Save and Invite</div></div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       createNewEvent: function(event){
           dispatch(createNewEventAction(event));
       }
    }
}

export default connect(null, mapDispatchToProps)(NewEvent);