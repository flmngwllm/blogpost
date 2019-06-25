import jsonPlaceholder from '../api/jsonPlaceholder'


export const fetchPosts = () => async dispatch => {
     const response = await jsonPlaceholder.get('/posts')
    
    //dispatching the action manually
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    }

