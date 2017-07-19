/**
 * Created by hilakerer1 on 04/07/2017.
 */
import React from 'react'
import '../styles/ThankYou.css'

class ThankYou extends React.Component {
    render(){
        return (
            <div className='thank-you'>
                <div>
                    <div className='message'>Your event was saved successfully!</div>
                    <div className="heart"></div>
                </div>
            </div>
        )
    }
}

export default ThankYou;