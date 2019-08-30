import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import {withRouter} from 'react-router-dom'
import AuthServices from '../services/auth.services'

import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const modalStyle = function() {
    return {
        backgroundColor: 'black',
        color: 'white',
        opacity: '.9',
        top: '20px',
        display: 'block',
        position: 'absolute',
        width: '100%',
        padding: '20px',
        borderRadius: '5%'
    }
}

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
        this.state = {
            modal14: false,
            
        }
        // this.state = {
            //     showLoginModal: false,
            //     showLoginCmpModal: false,
            //     showSignupCmpModal: false,
            //     showSignupModal: false,
            
            // }
    }
    
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
      }

    // handleModalLoginOpen = () => {
    //     console.log("me abro")
    //     this.setState({ showLoginModal: true })}
    // handleModalLoginClose = () => this.setState({ showLoginModal: false })

    // handleModalLoginCmpOpen = () => this.setState({ showLoginCmpModal: true })
    // handleModalLoginCmpClose = () => this.setState({ showLoginCmpModal: false })

    // handleModalSignupCmpOpen = () => this.setState({ showSignupCmpModal: true })
    // handleModalSignupCmpClose = () => this.setState({ showSignupCmpModal: false })

    // handleModalSignupOpen = () => this.setState({ showSignupModal: true })
    // handleModalSignupClose = () => this.setState({ showSignupModal: false })

    toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
                console.log(this.props)
                this.props.history.push('/plans')
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.showLoginModal)
        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'


        if (this.props.userInSession) {
            return (
                <>

                    {/* <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="">Disfruton</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/plans">Planes</Nav.Link>
                        <NavDropdown title="Mi perfil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="mydetails">Mis datos</NavDropdown.Item>
                            <NavDropdown.Item href="profile/plans">Mis Disfrutones</NavDropdown.Item>
                            <NavDropdown.Item href=""></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  onClick={this.logout}>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar> */}

                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1>Disfruton App</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/profile">Perfil</Link></li>
                                <li><Link to="/plans">Planes</Link></li>
                                <li><div onClick={this.logout}  >Cerrar sesión</div></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>
                        </nav>
                    </header>
                    
                </>
            )
        } else {
            return (
                <>

{/* <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Disfruton</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/signup">Registro</Nav.Link>
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                        <Nav.Link href="/plans">Planes</Nav.Link>
                        
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar> */}
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1><Link to="/">Disfruton App</Link></h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/plans">Planes</Link></li>
                                <li><button className="btn-nostyle" onClick={this.toggle(2)}>Registro</button></li>
                                <li><button className="btn-nostyle" onClick={this.toggle(14)} >Inicio de sesión</button></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>
                        </nav>
                    </header>


                    {/* <Modal show={this.state.showLoginModal} onHide={this.handleModalLoginClose}>
                       
                        <Modal.Header closeButton/>
                    <Modal.Body>
                        <Login closeModal={this.handleModalLoginClose}/>
                    </Modal.Body>
                    
                    </Modal> */}

                
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>Iniciar Sesión</MDBModalHeader>
                    <MDBModalBody>
                        <Login setUser={this.props.setUser}/>
                    </MDBModalBody>
                    </MDBModal>
                
               
                    <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
                    <MDBModalHeader toggle={this.toggle(2)}>Registro Gratuito</MDBModalHeader>
                    <MDBModalBody>
                        <Signup setUser={this.props.setUser}/>
                    </MDBModalBody>
                    </MDBModal>
                
                    
                </>
            )
        }

    }
}
export default withRouter(NavBar)