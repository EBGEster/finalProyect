import axios from 'axios'

export default class Services {

    constructor(){

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL_API}`,
            withCredentials: true
        })
    }

    getPlans = () => {
        //console.log("get all plans <service ")
       return  this.service.get('getAllPlans')
    }
    getCompanyPlans = (id) => this.service.get(`getCompanyPlans/${id}`)
    getOnePlan = id => {
        //console.log("get one plan", id)
        return this.service.get(`getOnePlan/${id}`)
    }
    postPlan = newPlan => this.service.post(`postPlan`, newPlan)
    deletePlan = id => this.service.get(`deletePlan/${id}`)
    handleUpload = theFile => this.service.post('/upload', theFile)
}