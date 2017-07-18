/**
 * Created by hilakerer1 on 14/06/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../styles/Header.css'

class Header extends React.Component {
    onNewClick(){
        this.props.history.push("/newEvent");
    }
    render() {
        return (
            <div className='top-menu' >
                <div className='header-item logo'>Logo</div>
                <div className='header-item new-menu' onClick={this.onNewClick.bind(this)}>+ New Event</div>
                <div className='header-item about-menu'>about</div>
                <div className='header-item contact-us-menu'>contact us</div>
            </div>)
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

export default withRouter(Header);