import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'

import SignupCompany from '../components/auth/SignupCompany'
import LoginCompany from '../components/auth/LoginCompany';
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import { Link } from 'react-router-dom'
import Services from '../services/plan.services'
import PlanCard from '../components/Plan/PlanCard'
import {CardDeck, Card}from 'react-bootstrap'

import { withRouter } from "react-router";



class Home extends Component{
    constructor(){
        super()
        this.state = {
            plans: [],
            modal14: false,
            modal3: false
        }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getPlans()
            .then(response => {
                let arr = []

                response.data.forEach(elm => {
                    
                    if (elm.rate === 5 && arr.length<=9){
                        arr.push(elm)
                    }
                    
                });


                this.setState({ plans: arr})
                console.log(this.state.plans)
            })
            .catch(err => console.log(err))
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }

    toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')


    render() {

        

        return(
            <>
                
                    <div className="row">
                        <div className="col-8">

                        <h1 className="h1-home"> >> Encuentra los mejores descuentos para tus planes
                        </h1>
                        </div>

                        <div className="col-4">
                            <img src="https://res.cloudinary.com/ebg-ester/image/upload/v1567090398/pvzctpsrbqx57tnewoly.png" alt=""/>
                        </div>

                    </div>

                    <div className="container div-home-white align-items-center">
                        <div className="row register-div-free justify-content-around ">

                          
                            <div className="col-6" >
                            <input className="search-input bar-search-input" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Introduce tu búsqueda"></input>

                                
                            </div>
                            <div className="col-3">
                            <input className="search-input location-input" name="name" value="Madrid" placeholder="Madrid" readOnly></input>
                            </div>

                            <div className="col-3 justify-content-center">
                            <Link to="/plans"><MDBBtn color="info" >Ver planes</MDBBtn></Link>
                            </div>
                            {/* <div className="col-1">

                            </div> */}

                        </div>
                    </div>

                    <div className="container ">
                        <h3 className="h3-home">Planes destacados</h3>
                        <div className="row">
                        

                            {this.state.plans.map(plan => <PlanCard key={plan._id} {...plan} />)}

                        </div>
                        
                        <div className="container best-plans">
                        <div className="row justify-content-center">

                        <MDBBtn color="info" >Únete para ver más planes</MDBBtn>
                        </div>
                        </div>
                    </div>

                    <div className="container company-log">
                        {/* <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-1">

                            </div>
                            <div className="col-1">

                            </div>
                        </div> */}
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567090398/sgzmivo4edhkmcfxpd7h.png" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567090398/lxm54u0aeoawetokv5pp.png" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567090398/nyhz29pjwn8qaftgi9xm.png" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            
                            </CardDeck>
                        
                            

                        {/* <div style={{display: "flex"}}> */}
                        <div className="best-plans">
                    <div className="hvrbox">
                            <div>
                            <button  className="btn-spe-1 hvrbox-layer_bottom btn btn-info flexChildrenCentered">Tengo una empresa</button>
                            <div className="hvrbox-layer_top hvrbox-layer_scale flexChildrenCentered">
                                <div className="hvrbox-text">
                                <MDBBtn color="info" className="btn-spe-2" onClick={this.toggle(3)}>Crear cuenta</MDBBtn>
                                <MDBBtn color="info" className="btn-spe-2" onClick={this.toggle(14)}>Iniciar sesión</MDBBtn>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Login company */}
                
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                <MDBModalHeader toggle={this.toggle(14)}>Iniciar Sesión</MDBModalHeader>
                <MDBModalBody>
                    <LoginCompany setUser={this.props.setUser}/>
                </MDBModalBody>
                </MDBModal>
                

                {/* Modal Signup Company */}
                
                <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} centered>
                <MDBModalHeader toggle={this.toggle(3)}>Registro Gratuito</MDBModalHeader>
                <MDBModalBody>
                <SignupCompany setUser={this.props.setUser}/>
                </MDBModalBody>
                </MDBModal>
               
            </>
        )
    }
}

// <li><Link to="/">Inicio</Link></li>
// <li><Link to="/plans">Planes</Link></li>
{/* <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
<header className="menu">
    <h1><Link to="/">Disfruton App</Link></h1>
    <nav>
        <ul>
            
            <li><button onClick={this.toggle(2)}>Registro</button></li>
            <li><button onClick={this.toggle(14)} >Inicio de sesión</button></li>
            
        </ul>
    </nav>
</header>





<MDBContainer>
<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
<MDBModalHeader toggle={this.toggle(14)}>Iniciar Sesión</MDBModalHeader>
<MDBModalBody>
    <Login setUser={this.props.setUser}/>
</MDBModalBody>
</MDBModal>
</MDBContainer>

<MDBContainer>
<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
<MDBModalHeader toggle={this.toggle(2)}>Registro Gratuito</MDBModalHeader>
<MDBModalBody>
<Signup setUser={this.props.setUser}/>
</MDBModalBody>
</MDBModal>
</MDBContainer> */}

export default withRouter(Home)