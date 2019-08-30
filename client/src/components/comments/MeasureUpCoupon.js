import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import RatePlan from './RatePlan';
import StarRatingComponent from 'react-star-rating-component'
import axios from 'axios'
import { withRouter } from "react-router";


class MeasureUpCoupon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            couponId: this.props.comment.couponId,
            username: this.props.comment.username ,
            plan: this.props.comment.plan,
            rate: undefined,
            text: ''
        }
        
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rate: nextValue});

    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, plan, text, rate, couponId } = this.state
        console.log(this.state)
        axios.post(`${process.env.REACT_APP_URL_API}createComment`, this.state)
            .then(theLoggedUser => {
                            console.log(theLoggedUser)
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        console.log(this.props.comment.couponId)
        return (
            // <MDBRow>
            //  <MDBCol md="1"/>
            //    <MDBCol md="10">
                 <form onSubmit={this.handleFormSubmit}>
                   <div className="grey-text">
                   <div>
                        {/* <h2>Rating from state: {rating}</h2> */}
                        <StarRatingComponent 
                        name="rate" 
                        starCount={5}
                        value={this.state.rate}
                        onStarClick={this.onStarClick.bind(this)}
                        />
                    </div>
                    {/* <textarea rows="2" cols="40" name="text" type="text" className="form-control" id="input-comentario" onChange={this.props.change} /> */}
                    <textarea id="noter-text-area" name="text" label="Tus comentarios" value={this.state.value} onChange={this.handleInputChange} />
                     {/* <MDBInput 
                        //  type="textarea" rows="2" label="Tus comentarios" icon="pencil-alt"
                    //    label="Tus comentarios"
                       
                    //    group
                    //    type="textarea"

                    //       name="text"
                          value={this.state.value}
                           onChange={this.props.change}
                     /> */}
                     
                   
                     <MDBBtn color="info" size="lg" type="submit">Enviar valoración</MDBBtn>
                   </div>
                 </form>
            //    </MDBCol>
            //  <MDBCol md="1"/>

            //  </MDBRow>

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

export default withRouter(MeasureUpCoupon)

{/* <RatePlan/>
            <CommentCard/> */}