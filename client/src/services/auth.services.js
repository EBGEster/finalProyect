import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL_API}`,
            withCredentials: true
        })
    }

    signup = (username, password, email, chatToken, plans ) => this.service.post('signup', { username, password, email, chatToken, plans })
    signupCompany = (username, companyName, password, email, city, vatNumber, chatToken, plans ) => this.service.post('signup/company', { username, companyName, password, email, city, vatNumber, chatToken, plans })
    login = (username, password) => this.service.post('login', { username, password })
    loginCompany = (username, password) => this.service.post('login/company', { username, password })
    logout = () => this.service.post('logout')
    loggedin = () => this.service.get('loggedin')
}