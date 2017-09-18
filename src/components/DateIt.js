/**
 * Created by hilakerer1 on 19/06/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import {signInAction, saveDatesAction, requestCallStart} from '../actions/commonActions.js'
import DatesContainer from './DatesContainer.js'
import LoadingAnimation from './LoadingAnimation.js'
import '../styles/Dateit.css'


class DateIt extends React.Component {
    onSubmitClick(){
        var email = this.state.email;
        this.props.signIn(email);
        //this.props.history.push("/dateit/welcome");
    }
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    onSendClick(){
        this.props.saveDates(this.props.match.params.event, this.props.match.params.user);
       // this.props.history.push("/thankyou");
    }
    render() {
        if(this.props.email || true){
            return (
                <div>
                    <div className='content-box left-content'><span className='title'>Hello <br></br> Gorgeous</span></div>
                    <div className='content-box right-content'>
                        <span>
                            <div className='title'>Don't tell me when you can,<br></br>tell me when you can't!</div>
                            <DatesContainer dates={this.props.dates} />
                            <div className='send-button' onClick={this.onSendClick.bind(this)}>Send </div>
                        </span>
                    </div>
                    <LoadingAnimation />
                </div>);
        }else {
            return (
                <div className='login'>
                    <span>
                        <label>
                            please enter your email:
                            <input type="email" name="email" onChange={this.handleChange.bind(this)}/>
                        </label>
                        <div className='login-button' onClick={this.onSubmitClick.bind(this)}>Sign in </div>
                    </span>
                </div>);
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(DateIt);