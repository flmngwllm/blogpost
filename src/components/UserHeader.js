import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions'

class UserHeader extends Component {

    //calling action creator
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    render() {

        //finding a single user
        const user = this.props.users.find( user => user.id === this.props.userId);
        if (!user){
            return null
        }

        return (
            <div className="header">
             {user.name}
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    return {users : state.users}
}

// connect to get action
export default connect(mapStateToProps , {fetchUser: fetchUser}) (UserHeader)