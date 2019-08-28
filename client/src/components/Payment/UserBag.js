import React, {Component} from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class UserBag extends Component {

    constructor(props) {
        super(props)
        this.state = {  
        }

    }

    componentDidMount() {

    }
    
    render(){
        console.log(this.props)
        
        return (

            
            
            <StripeProvider apiKey="pk_test_3gY3KPCIBehXqwZiY02Pf0sX00pVolrBCx">
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Elements>
          <CheckoutForm total={23} name={this.props.user.data.username}/>
        </Elements>
      </div>
    </StripeProvider>
    )
    }
    
}

export default UserBag