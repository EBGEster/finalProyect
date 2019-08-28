import axios from 'axios'

export default class Services {

    constructor(){this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL_API}`,
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