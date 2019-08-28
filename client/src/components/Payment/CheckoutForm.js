import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Paymentservices from '../../services/payment.services'
import Couponservices from '../../services/coupon.services'

import PdfCreator from './PdfCreator'

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          plan: this.props.plan,
          complete: false,
          price: this.props.total,
          promCode: "So_party",
          inputCode:"",
          pdfGenerated: false,
          qrData:"",
          coupon: {
            plan: this.props.plan._id,
            companyName: this.props.plan.companyName,
            title: this.props.plan.title,
            description: this.props.plan.description,
            price: this.props.plan.price,
            category: this.props.plan.category,
            terms: this.props.plan.terms,
            imageUrl: this.props.plan.imageUrl,
            address: this.props.plan.address,
            city: this.props.plan.city,
            username: this.props.name,
            email: this.props.email
            //expiration: Date,
          }
        };
        this.submit = this.submit;
        this.services = new Paymentservices()
        this.couponservices = new Couponservices()
    }

  submit = async (ev) => {
      ev.preventDefault()
      
      let token = await this.props.stripe.createToken({name: this.props.name});

      // let response = await this.services.postCharge({
      //     method: "POST",
      //     headers: {"Content-Type": "text/plain"},
      //     body: `${token.token.id} `
          
      //     })
      let response = await fetch('http://localhost:5000/api/charge'/* + 'charge'*/,{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: `${token.token.id}` 
      });
      //console.log(response)
    if (response.ok) {
      this.setState({complete: true})

        this.couponservices.createCoupon(this.state.coupon)
        .then(x => {
          //console.log(x.data._id)
          this.setState({qrData : `http://localhost:3000/updateCoupon/${x.data._id}`})
          
        })
        .catch(err => console.log('error', err))
      };
  }

handleFormSubmit = e => {
  e.preventDefault()
  console.log(this.state)
  let newprice = parseInt(this.props.total)*0.8

  console.log(newprice, "newprice")

  //this.props.closeModal()
  this.setState({
    price: '',
  })
  //this.props.updateplanList()
  if (this.state.promCode === this.state.inputCode) this.setState({price: newprice})
          //this.props.showToast()
  
  
}

handleChangeInput = e => {
  const { name, value } = e.target
  //console.log(name, value)
  this.setState({
      [name]: value
  })

  
}

pdfGenerated = () => {
  this.setState({ pdfGenerated: true })
}


  render() {
    //console.log(this.props.email)
    //console.log(this.state.price, "soy el precio")
    console.log("Soy el qr", this.state.qrData)
    if (this.state.complete) {
      let pdfCreatorTag = <></>

      
      if (!this.state.pdfGenerated && this.state.qrData) 
        pdfCreatorTag = <PdfCreator qrInfo={this.state.qrData} info={this.state.plan} price={this.state.price} pdfGenerated={this.pdfGenerated} email={this.props.email}/>

      return(
        <>
          <h1>Pago realizado correctamente</h1>
          <h1>Generando Disfrutón...</h1>
          {pdfCreatorTag}
          
        </>
      )
    }
    return (
      <div className="checkout">
        <p>Introduzca información de facturación para completar la compra</p>
        <p>Subtotal  {this.props.total} €</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="input-nombre">Código promocional</label>
            <input name="inputCode" type="text" className="form-control" id="input-inputCode" onChange={this.handleChangeInput} value={this.state.inputCode}/>
          </div>
        <button type="submit" className="btn btn-dark btn-sm ">Aplicar</button>
        </form>
        <p>Total {this.state.price}</p>
        <CardElement />
        <button onClick={this.submit}>Realizar compra</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);