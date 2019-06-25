import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions'

class UserHeader extends Component {

    //calling action creator
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    render() {

        //finding a single user and make component more reusable
        const {user} = this.props
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

//get data out of redux store also reference to the props that about to be sent to the component using ownProps
const mapStateToProps =(state, ownProps) => {
    return {user : state.users.find(user => user.id === ownProps.userId)}
}

// connect to get action
export default connect(mapStateToProps , {fetchUser: fetchUser}) (UserHeader)