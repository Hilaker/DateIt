import React from 'react';

class SignUp extends React.Component {
    render(){
        return (
            <div>
                <div className='home-background'></div>
                <div className='form'>
                    <div className='form-title'>Create your DateIt account.</div>
                    <div className='input-wrapper'>
                        <label>
                            Full Name:
                        </label>
                        <input type="text" name="userName"/>
                    </div>
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
                    <span className='action-button'>Create account</span>
                </div>
            </div>
        )
    }
}

export default SignUp;
