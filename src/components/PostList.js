import React, { Component } from 'react';
import {connect} from 'react-redux'
import {  fetchPostsandUsers } from '../actions';
import UserHeader from './UserHeader'

class PostList extends Component {

    //calling action creator when app is rendered
    componentDidMount(){
        this.props.fetchPostsandUsers()
    }


    //mapping through post to display the title and body content
    renderList () {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className = "description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div> 
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }


    render() {
        console.log(this.props.posts)
        return (
            <div className="ui relaxed divided list">
            {this.renderList()}
            </div>
        );
    }
}

//accessing state from actions
const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPostsandUsers : fetchPostsandUsers}) (PostList);