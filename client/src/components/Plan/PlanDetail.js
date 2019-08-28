import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Services from '../../services/plan.services'

import SimpleMap from '../Map/SimpleMap'

import Comment from '../svg/comment'
import Views from '../svg/views'
import Time from '../svg/time'
import Fire from '../svg/fire'
import RatingPlan from '../Payment/RatingPlan';
import { Modal } from 'react-bootstrap'
import CheckoutForm from '../Payment/CheckoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'

//import '../styles/plan-detail.css'


class PlanDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            showModal: false
        }
        this.service = new Services()
    }

    componentDidMount() {
        console.log(this.props)
        this.service.getOnePlan(this.props.match.params.id)
            .then(response => this.setState({ plan: response.data }))
            .catch(err => console.log('err', err))
     }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    render() {
        console.log(this.props)
        if(this.state.plan) {
            // console.log(this.state.plan.stock)
            let theStock

            if (this.state.plan.stock>=20){
                 theStock = <div className="col-4"><Time/> <small>Aún disponible</small></div>  } 
                else if (this.state.plan.stock<20){
                theStock = <div className="col-4"><Fire/> <small>Agotándose</small></div>
            }
            return (
            
            <>

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Body>
                    <StripeProvider apiKey="pk_test_3gY3KPCIBehXqwZiY02Pf0sX00pVolrBCx">
                        <div className="example">
                             <h1>{this.state.plan.title}</h1>
                             <Elements>
                            <CheckoutForm total={this.state.plan.price} plan={this.state.plan} closeModal={this.handleModalClose} name={this.props.loggedInUser.data.username} email={this.props.loggedInUser.data.email}/>
                         </Elements>
                        </div>
                    </StripeProvider>
                        {/* <CheckoutForm closeModal={this.handleModalClose} user={this.props.loggedInUser.data}/> */}
                    </Modal.Body>
                </Modal>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.plan.title}</h1>
                        <figure><img src={this.state.plan.imageUrl} alt={this.state.plan.title}></img></figure>
                        <p><h3>Descripción</h3> <br/>{this.state.plan.description}</p>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <Comment/>
                                    <small>{/*this.state.plan.comments.length*/}28 Comentarios</small>
                                </div>
                                {theStock}  
                                <div className="col-4">
                                    <Views/>
                                    <small> + 100 visitas diarias</small>
                                </div>
                            </div>
                               
                        </div>

                        <h3>Por solo    {this.state.plan.price} € </h3>

                        <button className="btn btn-dark" onClick={this.handleModalOpen}> ¡Compra ya!</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <h4>{this.state.plan.companyName}</h4>
                        <address>{this.state.plan.address}</address>
                        <figure><SimpleMap plan={this.state.plan}/></figure>
                        <p><h3>Condiciones</h3> <br/>{this.state.plan.terms}</p>
                        
                    </div>
                    <div className="col">
                        <h3>Opiniones de nuestros clientes</h3>
                        <p>{this.state.plan.rate} <RatingPlan rate={this.state.plan.rate}/></p>
                        <div>
                            {/*Aquí hay que hacer un map con los comentarios */}
                            <h4>Nombre usuario que comentó</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, taciti ante potenti faucibus natoque congue sociosqu, magnis penatibus lobortis fusce mus ut. Tellus proin mauris vehicula ultricies rutrum tempus nullam mi euismod iaculis, sociis dictum accumsan justo non porta sapien fames suscipit ridiculus aliquam, nostra aliquet curabitur urna luctus pulvinar dictumst varius praesent. </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    } else {
        return <h1>Cargando planes...</h1>
    }
            
    }

}

export default PlanDetail

//     <div className="container">
            //     <article className="coaster-detail">
            //         <div className="row justify-content-center">
            //             <div className="col-md-6">
            //                 <h1>Detalles de {this.state.plan.title}</h1>
            //                 <p><strong>Descripción:</strong> {this.state.plan.description}</p>
            //                 <hr></hr>
            //                 <p><small>Precio:</small> {this.state.plan.price} | Unidades disponibles: {this.state.plan.units}</p>
            //                 <Link className="btn btn-big btn-dark" to="/plans">Volver</Link>
            //             </div>
            //             <div className="col-md-4">
            //                 <figure><img src={this.state.plan.imageUrl} alt={this.state.plan.title}></img></figure>
            //                 <figure><SimpleMap plan={this.state.plan}/></figure>
                            
            //             </div>
            //         </div>
            //     </article>
            // </div>
