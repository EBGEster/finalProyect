import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'



import '../styles/CouponCard.css'
import CommentCard from '../comments/Comment.Card';
import MeasureUpCoupon from '../comments/MeasureUpCoupon';


class CouponCard extends Component {
    constructor(props){
        super(props)
        this.state= { comment: {
            couponId: this.props._id,
            username: this.props.username ,
            plan: this.props.plan,
            text: '',
            rate: 0
        },
        modal14: false,
        }

        
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    
    
    
    
    render(){
        const { title, imageUrl, _id , price, companyName, state, rated, commented} = this.props
        //console.log("Dame mis props",this.props)
        //console.log(this.state, "Cupon card ")
        let status
        let mydiv
        if (state === "active") status= "Listo para disfrutar"
        else if(state === "redeemed") {
            status = "Ya se ha disfrutado"
            if (rated === false ){
                mydiv = <>
                    <button onClick={this.toggle(14)}>Valorar Disfrutón</button>
                    {/* <CommentCard/> */}
                    
                    </>
            } else if (rated === true ){
                mydiv = <></>
            }
        
        }

        return (
            
            <>  
                <Card className="text-center">
                    <Card.Header>Disfrutón</Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>{companyName}</Card.Subtitle>
                        <Card.Img variant="left" src={imageUrl} className="mini-img"/>
                            <Card.Text>
                                
                    </Card.Text>
                    <Link to={`/plans/${_id}`} variant="primary">Ver plan</Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">{status}<div>{mydiv}</div></Card.Footer>
                </Card>
                    
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>Valoración del Disfrutón</MDBModalHeader>
                    <MDBModalBody>
                        <MeasureUpCoupon comment={this.state.comment}/>
                    </MDBModalBody>
                    </MDBModal>
            </>
        )
    }
}

export default CouponCard