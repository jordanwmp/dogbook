const API_KEY = 'YOU_API_KEY_HERE'
const url = 'https://api.api-ninjas.com/v1/'

import axios from 'axios'

const api = axios.create({
    baseURL: url
})

export default api
export {API_KEY}