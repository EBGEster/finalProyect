import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import couponServices from '../../services/coupon.services'
import CouponCard from './CouponCard'


class UserCoupons extends Component {
    constructor(){
        super()
        this.state = {
            coupons: []
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

    render() {
        
        return (
            <>
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