import React from 'react';

const WelcomeMessage = (props) => {
    if(props.eventId){
        return (
            <div className='box-layout'>
                <div>Congratulations! <br/> <span className='sub-title'>You were invited by your friend </span></div>
                <div className='sign-up-box'>
                    <span className='action-button' onClick={props.onSignupClick}>Sign up</span> or <span className='action-button' onClick={props.onSignInClick}>Sign in</span>
                </div>
            </div>
        );
    }
    return (
        <div className='box-layout'>
            <div>Get together with your friends.</div>
            <span className='action-button' onClick={props.onSignupClick}>Sign up and create an event</span>
        </div>
    )
};

export default WelcomeMessage;