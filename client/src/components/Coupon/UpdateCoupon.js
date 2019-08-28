import React, {Component} from 'react'
import couponServices from '../../services/coupon.services'

class UpdateCoupon extends Component{
    constructor(props){
        super(props)
        this.services = new couponServices()
    }



    componentDidMount() {
        // this.services.updateCoupon(this.props.match.params.id)
        // .then(
        //     x => console.log(x)
        //     //toast con cupón canjeado
        // )
        // .catch(err => console.log('error', err))
    }

    redeemCoupon(){
        this.services.updateCoupon(this.props.match.params.id)
        .then(
            x => console.log(x)
            //toast con cupón canjeado
        )
        .catch(err => console.log('error', err))    }

    render(){

        console.log(this.props)
        if (this.props.user.data.role === "user"){
            return (<h1>Ups! Solo las empresas tienen acceso a esta página.</h1>)
        }else if(this.props.user.data.role === "company"){
            return(
                <button onClick={()=> this.redeemCoupon()}>Canjear Disfrutón</button>
            )
        }
    }
}

export default UpdateCoupon