import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/plan.services'

import SimpleMap from '../components/Map/Map'

//import '../styles/plan-detail.css'


class PlanDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOnePlan(this.props.match.params.id)
            .then(response => this.setState({ plan: response.data }))
            .catch(err => console.log('err', err))
    }


    render() {
        
        if(this.state.plan) {
            return (
                <div className="container">
                <article className="coaster-detail">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1>Detalles de {this.state.plan.title}</h1>
                            <p><strong>Descripción:</strong> {this.state.plan.description}</p>
                            <hr></hr>
                            <p><small>Precio:</small> {this.state.plan.price} | Unidades disponibles: {this.state.plan.units}</p>
                            <Link className="btn btn-big btn-dark" to="/plans">Volver</Link>
                        </div>
                        <div className="col-md-4">
                            <figure><img src={this.state.plan.imageUrl} alt={this.state.plan.title}></img></figure>
                            <figure><SimpleMap plan={this.state.plan}/></figure>
                            
                        </div>
                    </div>
                </article>
            </div>
        )
    } else {
        return <div>ESperando planes...</div>
    }
            
    }

}

export default PlanDetail