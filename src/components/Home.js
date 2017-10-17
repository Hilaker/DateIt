import React from 'react';
import {connect} from 'react-redux';
import {setUrlParamsToStoreAction} from '../actions/commonActions.js';
import '../styles/Home.css'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.onSignupClick = this.onSignupClick.bind(this);
    }
    onSignupClick(){
        //dispatch action to set event and user id to store
        this.props.setUrlParamsToStore(this.props.match.params.event, this.props.match.params.user);
        this.props.history.push("/login");
    }
    render(){
        const eventId = this.props.match.params.event;
        return (
            <div className='home-container'>
                <div className='home-background'></div>
                <div className='box-layout'>
                    {eventId ?
                        <div>Congratulations! <br/> <span className='sub-title'>You were invited by your friend </span></div>
                        :
                        <div>Get together with your friends.</div>
                    }
                    {eventId ?
                        <div className='sign-up-box'><span className='sign-up-button' onClick={this.onSignupClick}>Sign up</span> or <span className='sign-up-button'>Sign in</span></div>
                        :
                        <span className='sign-up-button' onClick={this.onSignupClick}>Sign up and create event</span>
                    }

                </div>
            </div>
        )
    }


};
//setUrlParamsToStore
var mapDispatchToProps = (dispatch) => {
    return {
        setUrlParamsToStore: function(event, id){
            dispatch(setUrlParamsToStoreAction(event, id));
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);