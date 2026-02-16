import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://ifoodbackend-1.onrender.com/api/v2',
})

export const BASE_URL = 'https://ifoodbackend-1.onrender.com/api/v1'

