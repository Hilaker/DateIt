/**
 * Created by hilakerer1 on 19/06/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import {signInAction} from '../actions/commonActions.js'
import '../styles/Dateit.css'


class DateIt extends React.Component {
    onSubmitClick(){
        var email = this.state.email;
        this.props.signIn(email);
        this.props.history.push("/dateit/welcome");
    }
    handleChange(event) {
        this.setState({email: event.target.value});
    }
    render() {
        if(this.props.email){
            return (
                <div>
                    <div className='left-content'>has email</div>
                    <div className='right-content'></div>
                </div>);
        }else {
            return (
                <div>
                        <label>
                            please enter email:
                            <input type="email" name="email" onChange={this.handleChange.bind(this)}/>
                        </label>
                        <button onClick={this.onSubmitClick.bind(this)}>Sign in </button>
                </div>);
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {email: state.email}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email) => {
            dispatch(signInAction(email));

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateIt);