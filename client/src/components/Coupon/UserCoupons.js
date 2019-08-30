import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import couponServices from '../../services/coupon.services'
import CouponCard from './CouponCard'
import CommentCard from '../comments/Comment.Card'
import RatePlan from '../comments/RatePlan'

class UserCoupons extends Component {
    constructor(){
        super()
        this.state = {
            coupons:[],
            

        }
        this.cpnServices = new couponServices()
    }

    componentDidMount = () => this.showCoupon()

    showCoupon = () => {
        this.cpnServices.getCoupons()
        .then(response =>{
            console.log(response.data.userPlans)
            this.setState({coupons: response.data.userPlans})
        } )
    }

    // handleInputChange = e => {
    //     const { name, value } = e.target
    //     this.setState({ [name]: value })
    // }

    // handleFormCommentSubmit = e => {
    //     e.preventDefault()
    //     const { username, plan, text, rate } = this.state
    //     axios.post(`${process.env.REACT_APP_URL_API}createComment`, this.state)
    //         .then(theLoggedUser => {
    //             this.setState({
    //                 username: '',
    //                 password: ''
    //             })
                
    //             this.props.history.push('/profile')
    //         })
    //         .catch(err => console.log(err.response.data.message))
    // }

    render() {
        
        return (
            <>
            {/* componente valoracion hay que pasarle user plan*/}
            
            
                <Link to="/profile">Volver</Link>

                <div className="container">
                    <div className="row">
                        <div className="col">

                    {this.state.coupons.map(coupon => <CouponCard key={coupon._id} {...coupon} />)}
                        </div>
                    </div>
                </div>
            {/* <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                         <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                 </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card> */}
            </>
        ) 
    }
}

export default UserCoupons