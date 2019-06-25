import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'

//call action creator to call inner function then dispatch and it waits for list of post
export const fetchPostsandUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())

    //gives access to all data in redux using getState and map through posts to find unique userid
   const userIds = _.uniq(_.map(getState().posts, 'userId'))
   //iterate over list of ids for each id dispatch the result
   userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
     const response = await jsonPlaceholder.get('/posts')
    
    //dispatching the action manually
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    }

export const fetchUser = (id) => async dispatch =>{
const response = await jsonPlaceholder.get(`/users/${id}`)

dispatch({type: 'FETCH_USER', payload: response.data})

}


// fetching user only one time using memoize
// export const fetchUser = (id) =>  dispatch => {
//     _fetchUser(id, dispatch);
// }
// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({type: 'FETCH_USER', payload: response.data})
// })





