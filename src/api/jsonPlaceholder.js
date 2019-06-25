import axios from 'axios'

//api url with custom instance of axios
export default axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
})