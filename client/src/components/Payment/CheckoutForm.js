import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Paymentservices from '../../services/payment.services'
import Couponservices from '../../services/coupon.services'
import { Redirect } from 'react-router-dom'

import PdfCreator from './PdfCreator'

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          plan: this.props.plan,
          redirect: false,
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
      let response = await fetch(`${process.env.REACT_APP_URL_API}charge`,{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: `${token.token.id}` 
      });
      //console.log(response)
    if (response.ok) {
      this.setState({complete: true , redirect: true})

        this.couponservices.createCoupon(this.state.coupon)
        .then(x => {
          //console.log(x.data._id)
          console.log(`${process.env.REACT_APP_QRCODE}updateCoupon/${x.data._id}`)
          this.setState({qrData : `${process.env.REACT_APP_QRCODE}updateCoupon/${x.data._id}`})
          
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
      
      // if (this.state.redirect) {
      // console.log("me redirijo")
      //        return <Redirect to='/profile'/>}
      return(
        <>
          <h1>Pago realizado correctamente</h1>
          <h1>Generando Disfrutón...</h1>
          {pdfCreatorTag}
          
           
        </>
      )
    }
    return (
      <div className="container">
          <div classname="row">

              <h3>Datos personales</h3>
          </div>
          <div className="row">
              <div className="form-group col-5">
                <label htmlFor="exampleInput">Nombre</label>
                <input type="text" id="exampleInput" className="form-control" />
              </div>
              <div className="form-group col-5">
                <label htmlFor="exampleInput">Apellidos</label>
                <input type="text" id="exampleInput" className="form-control" />
              </div>
          </div>
          <div className="row">
            <div className="form-group col-10">
                <label htmlFor="exampleInput">email</label>
                <input type="email" id="exampleInput" className="form-control" />
              </div>
          </div>
          <div className="row">
          <h3>Método de pago</h3>
          </div>    
          <div className="row">
              <div class="custom-control custom-radio col-4">
                <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" checked/>
                <label class="custom-control-label" for="defaultChecked">Credit Card</label>
              </div>
              <div className="col-2"></div>
              <div className="col-6">
                <img className="credit-card" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567136784/gy8yxtwcrx33qr2u2lbb.svg" alt="mc"/>
                <img className="credit-card" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567136784/mnetfojk0bimnbdrabws.svg" alt="visa"/>
                <img className="credit-card" src="https://res.cloudinary.com/ebg-ester/image/upload/v1567136784/godvhs40etyh0mxmpr4m.svg" alt="amex"/>

              </div>
          </div>
          <div className="row">
            <div>
              <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="input-nombre">Código promocional</label>
                    <input name="inputCode" type="text" className="form-control" id="input-inputCode" onChange={this.handleChangeInput} value={this.state.inputCode}/>
                  </div>
                <button type="submit" className="btn btn-info btn-sm ">Aplicar</button>
              </form>
            </div>

          </div>
          <div className="row btn-buy">

            <h5>Subtotal {this.props.total} €</h5>
          </div>
          <div className="row btn-buy">
            <h5>Total {this.state.price} €</h5>
          </div>
          
            <CardElement/>
          
          <div className="row btn-buy">
            <div className="col-8"></div>
            <div className="col-4">
                <button className="btn btn-info" onClick={this.submit}>Comprar</button>
            </div>
          </div>
      </div>
      );
    }
  }
  
  export default injectStripe(CheckoutForm);
  // <div className="checkout">
  //   <p>Introduzca información de facturación para completar la compra</p>
  //   <p>Subtotal  {this.props.total} €</p>
  //   <form onSubmit={this.handleFormSubmit}>
  //     <div className="form-group">
  //       <label htmlFor="input-nombre">Código promocional</label>
  //       <input name="inputCode" type="text" className="form-control" id="input-inputCode" onChange={this.handleChangeInput} value={this.state.inputCode}/>
  //     </div>
  //   <button type="submit" className="btn btn-dark btn-sm ">Aplicar</button>
  //   </form>
  //   <p>Total {this.state.price}</p>
  //   <CardElement />
  //   <button onClick={this.submit}>Realizar compra</button>
  // </div>