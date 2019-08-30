import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import UserLogo from '../../logos/user.png'
import PassLogo from '../../logos/password.png'
import { withRouter } from "react-router";


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
      console.log(this.props)
        e.preventDefault()
        const { username, password } = this.state
        this.authServices.login(username, password)
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

          // <MDBContainer >
             <MDBRow>
             <MDBCol md="1"/>
               <MDBCol md="10">
                 <form onSubmit={this.handleFormSubmit}>
                   {/* <p className="h5 text-center mb-4">Iniciar Sesión</p> */}
                   <div className="grey-text">
                     {/* <div style={{display: "flex"}}> */}
                      
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
                     {/* </div> */}
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
          // </MDBContainer>
        
          // <MDBCard>
          //   <MDBCardBody >
          //     <form onSubmit={this.handleFormSubmit}>
          //       <p className="h4 text-center py-4">Iniciar Sesión</p>
          //       <div className="grey-text">
          //         <MDBInput
          //           label="Tu nombre"
          //           icon="user"
          //           group
          //           type="text"
          //           validate
          //           error="wrong"
          //           success="right"
          //           name="username"
          //           value={this.state.username}
          //           onInput={this.handleInputChange}
          //         />
          //         <MDBInput
          //           label="Tu contraseña"
          //           icon="envelope"
          //           group
          //           type="password"
          //           validate
          //           error="wrong"
          //           success="right"
          //           name="password"
          //           value={this.state.password}
          //           onInput={this.handleInputChange}
          //         />
          //       </div>
          //       <div className="text-center py-4 mt-3">
          //         <MDBBtn color="black" type="submit">
          //           Acceder
          //         </MDBBtn>
          //       </div>
          //     </form>
          //   </MDBCardBody>
          // </MDBCard>
        
        )



          //   <div className="container">
          //   <div className="row">
          //     <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          //       <div className="card card-signin my-5">
          //         <div className="card-body">
          //           <h5 className="card-title text-center">Iniciar Sesión</h5>
          //           <form className="form-signin" onSubmit={this.handleFormSubmit}>
          //             <div className="form-label-group">
          //               <input type="text" id="inputEmail" className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Nombre" required autoFocus/>
          //               <label >Nombre</label>
          //             </div>
        
          //             <div className="form-label-group">
          //               <input type="password" id="inputPassword" name="password" className="form-control" value={this.state.password} onChange={this.handleInputChange} placeholder="Contraseña" required/>
          //               <label >Contraseña</label>
          //             </div>
        
          //             <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Acceder</button>
                      
                      
          //           </form>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>










            /* // <div className="container">
            //     <h1>Iniciar sesión</h1>
            //     <form onSubmit={this.handleFormSubmit}>
            //         Nombre: <br/> <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
            //         Contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>
            //         <br/>
            //         <input type="submit" value="Iniciar sesión" />
            //     </form>
            // </div> */

        
    }
}

export default withRouter(Login)