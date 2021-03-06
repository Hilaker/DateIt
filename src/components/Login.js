import React from 'react';

class Login extends React.Component {
    render(){
        return (
            <div>
                <div className='home-background'></div>
                <div className='form'>
                    <div className='form-title'>Sign In</div>
                    <div className='input-wrapper'>
                        <label>
                            Email:
                        </label>
                        <input type="text" name="email"/>
                    </div>
                    <div className='input-wrapper'>
                        <label>
                            Password:
                        </label>
                        <input type="text" name="password"/>
                    </div>
                    <span className='action-button'>Sign In</span>
                </div>
            </div>
        )
    }
}

export default Login;
