import axios from 'axios'

export default class Services {

    constructor(){

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    createCoupon = newCoupon => this.service.post(`createCoupon`, newCoupon)
    getCoupons = () => this.service.get('getAllCoupons')
    getUserCoupons = (id) => this.service.get(`getUserCoupons/${id}`)
    updateCoupon = id => this.service.post(`updateCoupon/${id}`)
    //deletePlan = id => this.service.get(`deletePlan/${id}`)
    //handleUpload = theFile => this.service.post('/upload', theFile)
}