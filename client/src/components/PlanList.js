import React, { Component } from 'react'
import Services from '../services/plan.services'

import PlanCard from './PlanCard'

//import Dialog from '@material-ui/core/Dialog';


class PlanList extends Component {

    constructor() {
        super()
        this.state = { plans: [], showModal: false }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getPlans()
            .then(response => this.setState({ plans: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <div className="container">

                    <h1>Planes</h1>

                    {/* {this.props.userInSession && <button className="btn btn-dark btn-big" onClick={this.handleModalOpen}>Nueva montaña rusa</button>} */}

                    <div className="row coasters-list">

                        {this.state.plans.map(plan => <PlanCard key={plan._id} {...plan} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default PlanList