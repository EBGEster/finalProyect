import React, {Component} from 'react'
import AuthServices from '../../services/auth.services'

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
        <div>
            <h1>Registro Nuevo Usuario</h1>
            <form onSubmit={this.handleFormSubmit}>
                Usuario: <br/> <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br/>
                Email: <br/> <input name="email" type="mail" value={this.state.email} onChange={this.handleInputChange} /> <br/>
                Contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br/>
                {/* Confirmar contraseña: <br/> <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br/> */}
                <br/> 
                <input type="submit" value="Enviar" />
            </form>
        </div>
         )
    }
}

export default Signup