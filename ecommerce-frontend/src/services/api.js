import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
    // baseURL: 'https://sujeitoprogramador.com'
})

export default api;

