import axios from 'axios'

export default class Services {

    constructor(){

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getPlans = () => this.service.get('getAllPlans')
    getOnePlan = id => this.service.get(`getOnePlan/${id}`)
    postPlan = newPlan => this.service.post(`postPlan`, newPlan)
    deletePlan = id => this.service.get(`deletePlan/${id}`)
}