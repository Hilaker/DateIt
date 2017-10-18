import React from 'react';
import {connect} from 'react-redux';
import {setUrlParamsToStoreAction} from '../actions/commonActions.js';
import {PageContent} from '../common/constants.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import NewEvent from './NewEvent.js';
import '../styles/Home.css';
import '../styles/Common.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageContent: PageContent.HOME
        };
        this.onLogoClick = this.onLogoClick.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onSignInClick = this.onSignInClick.bind(this);
        this.goToNewEvent = this.goToNewEvent.bind(this);
    }
    onLogoClick(){
        this.setState({pageContent: PageContent.HOME});
    }
    onSignupClick(){
        this.setState({pageContent: PageContent.SIGNUP});
    }
    onSignInClick(){
        this.setState({pageContent: PageContent.LOGIN});
    }
    goToNewEvent(){
        this.setState({pageContent: PageContent.NEW_EVENT});
    }
    render(){
        const eventId = this.props.match.params.event;
        const isUserLoggedIn = false; //TODO
        return (
            <div className='home-container'>
                <div className='logo' onClick={this.onLogoClick}>DateIT</div>
                <div className='home-background'></div>
                {isUserLoggedIn && this.state.pageContent == PageContent.NEW_EVENT ? <NewEvent /> :
                    isUserLoggedIn ? <div className='action-button' onClick={this.goToNewEvent}>+ create New Event</div> :
                    this.state.pageContent == PageContent.LOGIN ? <Login /> :
                    this.state.pageContent == PageContent.SIGNUP ? <SignUp /> :
                        <div className='box-layout'>
                            {eventId ?
                                <div>Congratulations! <br/> <span className='sub-title'>You were invited by your friend </span></div>
                                :
                                <div>Get together with your friends.</div>
                            }
                            {eventId ?
                                <div className='sign-up-box'>
                                    <span className='action-button' onClick={this.onSignupClick}>Sign up</span> or <span className='action-button' onClick={this.onSignInClick}>Sign in</span>
                                </div>
                                :
                                <span className='action-button' onClick={this.onSignupClick}>Sign up and create an event</span>
                            }

                        </div>
                }
            </div>
        )
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        //setUrlParamsToStore: function(event, id){
        //    dispatch(setUrlParamsToStoreAction(event, id));
        //}
    }
}
export default connect(null, mapDispatchToProps)(Home);