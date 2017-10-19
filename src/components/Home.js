import React from 'react';
import {connect} from 'react-redux';
import {setUrlParamsToStoreAction} from '../actions/commonActions.js';
import {PageContent} from '../common/constants.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import NewEvent from './NewEvent.js';
import WelcomeMessage from './WelcomeMessage.js';
import Event from './Event.js';
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
    goToEvent(eventID){
        this.setState({
            pageContent: PageContent.EVENT,
            currentEvent: eventID
        })
    }
    getPageContent(){
        const isUserLoggedIn = true; //TODO
        if(isUserLoggedIn){
            if(this.state.pageContent == PageContent.NEW_EVENT){
                return  (<NewEvent eventId={this.props.match.params.event} user={this.props.match.params.user}/>);
            }
            if(this.state.pageContent == PageContent.EVENT){
                return <Event />
            }
            //display upcoming events
            var events = [{name: 'coffee with friends'},{name: "celebrating Amy's B-Day"}];
            return (
                <div className='events-box'>
                    <div className='action-button' onClick={this.goToNewEvent}>+ create New Event</div>Your upcoming events
                    {events.map((event, index) => <div className='event-entry' onClick={this.goToEvent.bind(this)} key={index}>{event.name}</div>)}<div></div>
                </div>
            );
        }
        if(this.state.pageContent == PageContent.LOGIN){
            return (<Login />);
        }
        if(this.state.pageContent == PageContent.SIGNUP){
            return <SignUp />
        }
        return <WelcomeMessage eventId={this.props.match.params.event} onSignupClick={this.onSignupClick} onSignInClick={this.onSignInClick}/>;
    }
    render(){
        return (
            <div className='home-container'>
                <div className='logo' onClick={this.onLogoClick}>DateIT</div>
                <div className='home-background'></div>
                {this.getPageContent()}
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