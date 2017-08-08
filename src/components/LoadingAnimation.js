/**
 * Created by hilakerer1 on 27/07/2017.
 */
import React from 'react'
import {connect} from 'react-redux';
import '../styles/LoadingAnimation.css'

class LoadingAnimation extends React.Component {
    render(){
        return this.props.showLoading?  (
            <div>
                <div className="glass-panel"></div>
                <div className="spinner"></div>

            </div>
        ) : (<div></div>);
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading : state.data.showLoading
    };
}
//<div className="glass-panel"></div>
//<div className="showbox">
//    <div className="loader">
//        <svg className="circular" viewBox="25 25 50 50">
//            <circle className="path" cx="50" cy="50" r="10" fill="none" stroke-width="2" stroke-miterlimit="10"/>
//        </svg>
//    </div>
//</div>
export default connect(mapStateToProps, null)(LoadingAnimation);