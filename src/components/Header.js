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
    render() {
        return (
            <div className='top-menu' >
                <div className='header-item logo'>Logo</div>
                <div className='header-item new-menu' onClick={this.onNewClick.bind(this)}>+ New Event</div>
                <div className='header-item about-menu' onClick={this.onAboutClick.bind(this)}>about</div>
                <div className='header-item contact-us-menu'>contact us</div>
            </div>)
    }
};

export default withRouter(Header);