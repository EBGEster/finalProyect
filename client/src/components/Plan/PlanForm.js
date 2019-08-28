import React, { Component } from 'react'
import Services from '../../services/plan.services'



class PlanForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            companyName: this.props.user.companyName,
            price: '',
            units: '',
            category: '',
            terms: '',
            imageUrl: '',
            address: '',
            city: '',
            location: {
                lat: '',
                lng: ''
            }
        }
        this.service = new Services()
    }


    handleChangeInput = e => {
        const { name, value } = e.target
        console.log(name, value)
        this.setState({
            [name]: value,
            location: {
                ...this.state.location,
                [name]: value
            } 
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.service.postPlan(this.state)
            .then(x => {
                //this.props.closeModal()
                this.setState({
                    title: '',
                    description: '',
                    companyName: '',
                    price: '',
                    units: '',
                    category: '',
                    terms: '',
                    imageUrl: '',
                    address: '',
                    city: '',
                    location: {
                        lat: '',
                        lng: ''
                    }
                })
                //this.props.updateplanList()
                //this.props.showToast()
            })
            .catch(err => console.log('error', err))
    }


    handleFileUpload = e => {

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        this.service.handleUpload(uploadData)
            .then(response => {
                this.setState({ imageUrl: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h4>Nuevo Plan</h4>

                <hr></hr>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-nombre">Título</label>
                        <input name="title" type="text" className="form-control" id="input-nombre" onChange={this.handleChangeInput} value={this.state.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-descripcion">Descripción</label>
                        <input name="description" type="text" className="form-control" id="input-descripcion" onChange={this.handleChangeInput} value={this.state.description}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-companyName">Empresa</label>
                        <input name="companyName" type="text" className="form-control" id="input-companyName" onChange={this.handleChangeInput} value={this.state.companyName} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-address">Dirección</label>
                        <input name="address" type="text" className="form-control" id="input-address" onChange={this.handleChangeInput} value={this.state.address}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-city">Ciudad</label>
                        <input name="city" type="text" className="form-control" id="input-city" onChange={this.handleChangeInput} value={this.state.city}/>
                    </div><div className="form-group">
                        <label htmlFor="input-lat">Latitud</label>
                        <input name="lat" type="number" className="form-control" id="input-lat" onChange={this.handleChangeInput} value={this.state.location.lat}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-lng">Longitud</label>
                        <input name="lng" type="number" className="form-control" id="input-lng" onChange={this.handleChangeInput} value={this.state.location.lng}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-price">Precio</label>
                        <input name="price" type="number" className="form-control" id="input-price" onChange={this.handleChangeInput} value={this.state.price}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-units">Unidades</label>
                        <input name="units" type="number" className="form-control" id="input-units" onChange={this.handleChangeInput} value={this.state.units}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Categoría</label>
                        <select name="category" onChange={this.handleChangeInput} value={this.state.category}> 
                            <option ></option>
                            <option value="beauty">Cuidado Personal</option>
                            <option value="gastro">Gastronomía</option>
                            <option value="automotive">Automóvil</option>
                            <option value="leisure">Ocio</option>
                            <option value="health-and-fitness">Salud y Bienestar</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-terms">Condiciones</label>
                        <input name="terms" type="text" className="form-control" id="input-terms" onChange={this.handleChangeInput} value={this.state.terms}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-img">Foto</label>
                        <input name="imageUrl" type="file" className="form-control" id="input-img" onChange={this.handleFileUpload} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm " onClick={this.props.closeModal}>Crear</button>
                    <button className="btn btn-dark btn-sm form-plan-btn" onClick={this.props.closeModal}>Cerrar</button>
                </form>
            </>
        )
    }

}

export default PlanForm