import React from 'react'
import RatingPlan from '../Payment/RatingPlan';

const CommentPlanCard = ({username, text, rate}) => {
    if(username) {

        let inicial = username.substring(0,1)
        console.log(inicial)
    }
    return (
        <section>
            <article>
                <div style={{borderRadius:"50%"}}>{username}</div>
                <h4>{username}</h4>
                <RatingPlan rate={rate}/>
                <p>{text}</p>
            </article>
        </section>
    )
}

export default CommentPlanCard
