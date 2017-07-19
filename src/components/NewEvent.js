/**
 * Created by hilakerer1 on 18/07/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {createNewEventAction} from '../actions/EventActions.js';
import '../styles/NewEvent.css'

class NewEvent extends React.Component {
    onSaveClick(){
        var newEventName = this.state && this.state.name ?  this.state.name : "no name";
        //Todo form input validations and handle response error
        this.props.createNewEvent({name: newEventName});
        this.props.history.push("/thankyou");
    }
    nameChange(event){
        this.setState({name: event.target.value});
    }
    inviteesChange(){

    }
    render() {
        return (
        <div className='new-event'>
            <div className='form'>
                <div className='input-wrapper'>
                    <label>
                        Event name:
                    </label>
                    <input type="text" name="name" onChange={this.nameChange.bind(this)}/>
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