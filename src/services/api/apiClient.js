import httpClient from '../httpClient.js'

let http = httpClient({
    baseURL: location.origin
})

http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default http