import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions'

class UserHeader extends Component {

    //calling action creator
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    render() {
        return (
            <div>
             UserHeader
            </div>
        );
    }
}

// connect to get action
export default connect(null , {fetchUser: fetchUser}) (UserHeader)