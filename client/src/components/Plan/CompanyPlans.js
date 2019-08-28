import React, {Component} from 'react'
import Services from '../../services/plan.services'

import {Link} from 'react-router-dom'
import PlanCard from '../Plan/PlanCard'


class CompanyPlans extends Component{
    constructor(props){
        super(props)
        this.state = {
            plans:[]}
        this.services = new Services()
    }

    componentDidMount = () => this.showPlanList()

    showPlanList = () => {
        console.log(this.props.loggedInUser.data.companyName)
        this.services.getCompanyPlans(this.props.loggedInUser.data.companyName)
            .then(response => {
                this.setState({ plans: response.data })})
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.props)
        return(
            <>
            <Link to="/profile">Volver</Link>
            <div className="container">
            <div className="row coasters-list">
                

                {this.state.plans.map(plan => <PlanCard key={plan._id} {...plan} />)}

            </div>
            </div>
            </>
        )
    }
}

// const CompanyPlans = ({ title, description, imageUrl, _id }) => {
// console.log(props)
//     return (
//         <div className="col-md-3">
//             <article className="coaster-card">
//                 <img src={imageUrl} alt={title} />
//                 <h4>{title}</h4>
//                 <hr></hr>
//                 <Link className="btn btn-sm btn-dark" to={`/plans/${_id}`}>Ver detalles</Link>
//                 <p>{description}</p>
//             </article>
//         </div>
//     )
// }

export default CompanyPlans