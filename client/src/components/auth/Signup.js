import React, {Component} from 'react'
import AuthServices from '../../services/auth.services'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import { withRouter } from "react-router";



class Signup extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''   
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const {username, password, email} = this.state
        this.authServices.signup(username,  password, email)
            .then(newUser => {
                this.setState({
                    username: '',
                    password: '',
                    email: ''
                    
                })
                this.props.setUser(newUser)
                this.props.history.push('/profile')
            })
    }
    render() {
        return(

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
                        label="Tu email"
                        icon="user"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                           name="email"
                          value={this.state.email}
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
                     <MDBBtn color="info" size="lg" type="submit">Crear Cuenta</MDBBtn>
                   </div>
                 </form>
               </MDBCol>
             <MDBCol md="1"/>

             </MDBRow>

        // <div>
        //     <h1>Registro Nuevo Usuario</h1>
        //     <form onSubmit={this.handleFormSubmit}>
        //         Usuario: <br/> <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br/>
        //         Email: <br/> <input name="email" type="mail" value={this.state.email} onChange={this.handleInputChange} /> <br/>
        //         Contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br/>
        //         {/* Confirmar contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br/> */}
        //         <br/> 
        //         <input type="submit" value="Enviar" />
        //     </form>
        // </div>
         )
    }
}

export default withRouter(Signup)