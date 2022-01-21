
import axios from 'axios';



const baseURL = process.env.VUE_APP_BACKEND_URL
const axiosAPI = axios.create({
    baseURL: baseURL,// Adres do serwera Django
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('token')
            ? 'Token ' + localStorage.getItem('token')
            : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
    },
	auth: {
		username: 'admin',
		password: 'admin123'
	}
})

export {axiosAPI}
