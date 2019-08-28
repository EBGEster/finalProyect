import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'



import '../styles/CouponCard.css'


const CouponCard = ({ title, imageUrl, _id , price, companyName, state, rated, commented}) => {

    let status
    let mydiv
    if (state === "active") status= "Listo para disfrutar"
    else if(state === "redeemed") {
        status = "Ya se ha disfrutado"
        if (rated === false && commented === false){
            mydiv = <></>
        } else if (rated === true && commented === true){
            mydiv = <>
                <button>Valorar Disfrutón</button>
        </>
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
                <Card.Footer className="text-muted">{status}</Card.Footer>
            </Card>
                
        </>
    )
}

export default CouponCard