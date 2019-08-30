import React, {Component} from 'react'
import Services from '../services/plan.services'
import couponServices from '../services/coupon.services'

import PlanForm from '../components/Plan/PlanForm'
import {Link} from 'react-router-dom'
import { Modal } from 'react-bootstrap'
//import { Modal, Toast } from 'react-bootstrap'
//import PlanCard from './Plan/PlanCard';
//import CompanyPlans from './Plan/CompanyPlans';

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            plans:[],
            showModal: false
        }
        this.services = new Services()
        this.cpnServices = new couponServices()
    }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    componentDidMount = () => this.showPlanList()

    showPlanList = () => {
        //console.log(this.props.loggedInUser.data.companyName)
        //this.cpnServices.getCoupons()
        //.then(x=> console.log("yo soy",x))
        this.services.getCompanyPlans(this.props.loggedInUser.data.companyName)
            .then(response => {
                this.setState({ plans: response.data })})
            .catch(err => console.log(err))
    }

    showCoupons = () => {
        this.cpnServices.getCoupons()
        .then(x=> console.log("yo soy",x))
    }

    render() {
        //console.log(this.props.loggedInUser.data.companyName)
        //{console.log(this.state.plans)}
        console.log(this.state.showModal)
        if (this.props.loggedInUser.data.role === "user"){
            
        return(
            <> 
            <h1>Área Privada</h1>

            <Link to="profile/coupons"> <button className="btn btn-dark btn-big" onClick={()=>this.showCoupons()}>Mis disfrutones</button> </Link>

            </>
        )}
        else if (this.props.loggedInUser.data.role === "company"){
        
            return(
                <> 
                <h1>Área Privada </h1>
                {/* {console.log("company")} */}
                <button className="btn btn-dark btn-big" >Estadísticas</button> <br/><br/>
                <button className="btn btn-dark btn-big" onClick={this.handleModalOpen}>Nuevo Plan</button><br/><br/>
                <Link to="profile/plans"><button className="btn btn-dark btn-big" onClick={this.showPlanList}>Mis planes</button></Link>

                {/* <div className="row coasters-list">

                    {this.state.plans.map(plan => <CompanyPlans key={plan._id} {...plan} />)}

                </div> */}

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Body>
                        <PlanForm closeModal={this.handleModalClose} user={this.props.loggedInUser.data}/>
                    </Modal.Body>
                </Modal>
                
                </>
        )}
    }
}

export default Profile
