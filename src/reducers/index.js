import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducers'


//combinereducers function
export default combineReducers({
    posts : postsReducer,
    users : usersReducer
})