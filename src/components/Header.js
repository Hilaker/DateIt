/**
 * Created by hilakerer1 on 14/06/2017.
 */
import React from 'react'
import { withRouter } from 'react-router-dom';
import '../styles/Header.css'

class Header extends React.Component {
    onNewClick(){
        this.props.history.push("/newEvent");
    }
    onAboutClick(){
        this.props.history.push("/about");
    }
    signIn(){

    }
    render() {
        return (
            <div className='top-menu' >
                <div className='header-item logo'>DateIT</div>
                <div className='header-item contact-us-menu' onClick={this.signIn.bind(this)}>Sign in</div>
            </div>)
    }
};

export default withRouter(Header);