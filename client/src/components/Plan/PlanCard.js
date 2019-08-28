import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import RatingPlan from '../Payment/RatingPlan';

import '../styles/PlanCard.css'


const PlanCard = ({ title, description, imageUrl, _id , price, companyName, rate, votes}) => {

    return (
        
        <div className="col-md-4">  
            <Link to={`/plans/${_id}`}>
                <Card>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{companyName}</Card.Title>
                        <div className="rating-div"><RatingPlan rate={rate}/> <small>{votes} votos</small></div>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text> */}
                    <Card.Title>{price} €</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{title}</small>
                    </Card.Footer>
                </Card>
                </Link>
        </div>
    )
}

export default PlanCard