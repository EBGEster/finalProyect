import axios from 'axios'

export default class Services {

    constructor(){this.service = axios.create({
        baseURL: 'http://localhost:5000/api',
        withCredentials: true
        })

    }

    postCharge = ({ method, headers, body }) => {
        console.log(method, headers, body)
        this.service.post('/charge', { method, headers, body }
        , { withCredentials: true }
        )
    }
}