const API_KEY = 'aYSweVHPlzX0eKVCrrcuqQ==NeNaai3LaUAWRekT'
const url = 'https://api.api-ninjas.com/v1/'

import axios from 'axios'

const api = axios.create({
    baseURL: url
})

export default api
export {API_KEY}