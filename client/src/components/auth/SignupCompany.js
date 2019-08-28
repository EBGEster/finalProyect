import React, {Component} from 'react'
import AuthServices from '../../services/auth.services'

class SignupCompany extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            companyName: '',
            password: '',
            email: '',
            city: '',
            vatNumber: ''   
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const {username, companyName, password, email, city, vatNumber} = this.state
        this.authServices.signupCompany(username, companyName, password, email, city, vatNumber)
            .then(newUser => {
                this.setState({
                    username: '',
                    companyName: '',
                    password: '',
                    email: '',
                    city: '',
                    vatNumber: ''  
                })
                this.props.setUser(newUser)
                this.props.history.push('/profile')
            })
    }
    render() {
        return(
        <div>
            <h1>Registro Nuevo Usuario</h1>
            <form onSubmit={this.handleFormSubmit}>
                Usuario: <br/> <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br/>
                Empresa: <br/> <input name="companyName" type="text" value={this.state.companyName} onChange={this.handleInputChange} /> <br/>
                Email: <br/> <input name="email" type="mail" value={this.state.email} onChange={this.handleInputChange} /> <br/>
                Ciudad: <br/> <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} /> <br/>
                Contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br/>
                CIF: <br/> <input name="vatNumber" type="password" value={this.state.vatNumber} onChange={this.handleInputChange} /> <br/>
                <br/> 
                <input type="submit" value="Enviar" />
            </form>
        </div>
         )
    }
}

export default SignupCompany