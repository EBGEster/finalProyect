import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'
import { withRouter } from "react-router";
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.authServices.loginCompany(username, password)
            .then(theLoggedUser => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.setUser(theLoggedUser)
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <MDBRow>
             <MDBCol md="1"/>
               <MDBCol md="10">
                 <form onSubmit={this.handleFormSubmit}>
                   <div className="grey-text">
                      
                     <MDBInput
                        
                       label="Tu nombre"
                       icon="user"
                       group
                       type="text"
                       validate
                       error="wrong"
                       success="right"
                          name="username"
                         value={this.state.username}
                           onInput={this.handleInputChange}
                     />
                     <MDBInput
                       label="Tu contraseña"
                       icon="lock"
                       group
                       type="password"
                       validate
          name="password"
                    value={this.state.password}
                    onInput={this.handleInputChange}
                     />
                   </div>
                   <div className="text-center">
                     <MDBBtn color="info" size="lg" type="submit">Acceder</MDBBtn>
                   </div>
                 </form>
               </MDBCol>
             <MDBCol md="1"/>

             </MDBRow>

            // <div className="container">
            //     <h1>Inicio de sesión de usuario</h1>
            //     <form onSubmit={this.handleFormSubmit}>
            //         Usuario: <br/> <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
            //         Contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>
            //         <br/>
            //         <input type="submit" value="Iniciar sesión" />
            //     </form>
            // </div>

        )
    }
}

export default withRouter(Login)