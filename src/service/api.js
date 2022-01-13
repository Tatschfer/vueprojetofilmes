import axios from 'axios';

//Api URL: https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api'
})

export default api;