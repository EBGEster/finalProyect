import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

class PdfCreator extends Component {

    constructor(props){
        super(props)
        this.state = {
            companyName: this.props.info.companyName,
            title: this.props.info.title,
            imageUrl: this.props.info.imageUrl,
            price: this.props.info.price,
            newPrice: this.props.price,
            address: this.props.info.address,
            city: this.props.info.city,
            terms: this.props.info.terms,
            qrData: this.props.qrInfo
         }
    }

    componentDidMount(){
        console.log(this.props.qrInfo, "comprobando QUERRE")
        console.log(this.state)
        this.createAndDownloadPdf()
    }

    //handleChange = ({target: {value, name}}) => this.setState({[name]: value})

    createAndDownloadPdf = () => {
        this.props.pdfGenerated();

        console.log(`${process.env.REACT_APP_URL_API}create-pdf`)
        axios.post(`${process.env.REACT_APP_URL_API}create-pdf`, this.state)
            .then(() => axios.get(`${process.env.REACT_APP_URL_API}fetch-pdf/${this.props.email}`, {responseType: 'blob'}))
            .then((res) => {
                const pdfBlob = new Blob([res.data], {type: 'application/pdf'})
                saveAs(pdfBlob, 'newPdf.pdf')
            })
    }

    render() {
        //{this.createAndDownloadPdf()};
        
        return (
            <></>
            // <div className="App">
            // <input 
            // type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
            // <input 
            // type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange}/>
            // <input 
            // type="number" placeholder="Price 1" name="price1" onChange={this.handleChange}/>
            // <input 
            // type="number" placeholder="Price 2" name="price2" onChange={this.handleChange}/>

            
            // {/* <button on
            // onClick={this.createAndDownloadPdf}>Download PDF</button></div> */}
        )
    }

}

export default PdfCreator