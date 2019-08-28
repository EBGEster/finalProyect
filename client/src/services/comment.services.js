import axios from 'axios'

export default class Services {

    constructor(){

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL_API}`,
            withCredentials: true
        })
    }

    createComment = newComment => this.service.post(`createComment`, newComment)
    //getCoupons = () => this.service.get('getAllCoupons')
    getPlanComments = (id) => this.service.get(`getPlanComments/${id}`)
    //deletePlan = id => this.service.get(`deletePlan/${id}`)
    //handleUpload = theFile => this.service.post('/upload', theFile)
}