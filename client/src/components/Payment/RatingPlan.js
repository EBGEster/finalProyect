import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class RatingPlan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating : this.props.rate
        }
    }
  render() {
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
        //   renderStarIcon={() => <span></span>}
          starCount={5}
          value={this.state.rating}
        />
      </div>
    );
  }
}

export default RatingPlan